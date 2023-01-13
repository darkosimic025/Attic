import React, { useCallback, useState } from 'react';

/* Libraries */
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

/* Components */
import { InputField } from 'components/UI/inputField/InputField';
import { Button } from 'components/UI/button/Button';
import { ClickableText } from 'components/UI/clickableText/ClickableText';

/* Styled components */
import {
  StyledLoginFormWrapper,
  StyledLoginHeader,
  StyledButtonGitHub,
  GitHub,
  Span,
  LoginError,
  LoginErrorWrapper,
} from './LoginForm.styled';

/* Types */
import { LoginFieldsTypes, LoginInputFieldProps } from './types';

/* Constants */
import { loginFields } from './loginFields';
import { loginSchema } from './loginFields';
import { CodeStatus } from 'utils/codeStatuses';
import { paths } from 'paths/paths';
import { textKeys } from 'utils/textKeys';
import { IDsForTesting } from 'utils/idsForTesting';

/*Hooks*/
import { useAppDispatch } from 'store/store';
import { useNavigate } from 'react-router-dom';

/*State management*/
import { getUserData, signIn } from 'store/user.actions';

/*Helpers*/
import { checkErrorInputField } from 'utils/helpers';
import { hubConnection } from 'store/signalR.middleware';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFieldsTypes>({ resolver: yupResolver(loginSchema) });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSignUp = useCallback(() => {
    navigate(paths.SIGNUP);
  }, []);

  const [loginError, setLoginError] = useState<boolean>(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>('');

  const onSubmit: SubmitHandler<LoginFieldsTypes> = useCallback(({ password, email }) => {
    dispatch(signIn({ password, email }))
      .unwrap()
      .then(() => {
        setLoginError(false);
        dispatch(getUserData())
          .unwrap()
          .then((userData) => {
            hubConnection.start();
            userData.status === CodeStatus.OK && navigate(paths.STORAGE, { replace: true });
          })
          .catch((error) => {
            setLoginError(true);
            error.statusCode === CodeStatus.Unauthorized &&
              setLoginErrorMessage(textKeys.login_authorization_error);
          });
      })
      .catch((error) => {
        setLoginError(true);
        error.statusCode === CodeStatus.BadRequest &&
          setLoginErrorMessage(textKeys.login_authentication_error);
      });
  }, []);

  return (
    <StyledLoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledLoginHeader>{textKeys.login_page_title}</StyledLoginHeader>
      {loginFields.map(
        ({
          name,
          type,
          label,
          seeIcon,
          id,
          errorId,
          idShowPasswordIcon,
          idUnshowPasswordIcon,
        }: LoginInputFieldProps) => (
          <InputField
            id={id}
            errorId={errorId}
            idShowPasswordIcon={idShowPasswordIcon}
            idUnshowPasswordIcon={idUnshowPasswordIcon}
            key={name}
            {...register(name)}
            name={name}
            label={label}
            seeIcon={seeIcon}
            type={type}
            error={errors[name]}
            validate={checkErrorInputField(errors, name)}
          />
        )
      )}
      <Button color={'primary'} size={'l'} id={IDsForTesting.login_button_sign_in_id}>
        {textKeys.login_button_signin}
      </Button>
      <Span>
        {textKeys.login_text_signup}
        <ClickableText
          id={IDsForTesting.login_clickable_text_sign_up_redirect_id}
          handleClick={handleSignUp}
        >
          {textKeys.login_button_signup}
        </ClickableText>
      </Span>
      <Span>{textKeys.login_text_or}</Span>
      <StyledButtonGitHub>
        <GitHub />
        {textKeys.login_button_gitHub}
      </StyledButtonGitHub>
      {loginError && (
        <LoginErrorWrapper>
          <LoginError id={IDsForTesting.login_server_error_message_id}>
            {loginErrorMessage}
          </LoginError>
        </LoginErrorWrapper>
      )}
    </StyledLoginFormWrapper>
  );
};

export default LoginForm;
