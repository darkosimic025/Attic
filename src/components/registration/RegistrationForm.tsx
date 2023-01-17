import React, { useCallback } from 'react';

/*Libraries*/
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

/* Components */
import { Error } from 'components/UI/error/Error';
import { TermsAndConditions } from 'components/termsAndConditions/TermsAndConditions';
import { Checkbox } from 'components/UI/checkbox/Checkbox';
import { InputField } from 'components/UI/inputField/InputField';
import { ModalState } from 'components/UI/modal/ModalWithState';
import { Button } from 'components/UI/button/Button';

/*Styled components*/
import {
  RegistrationError,
  StyledRegistrationFormWrapper,
  StyledRegistrationHeader,
} from './RegistrationForm.styled';

/*Types*/
import {
  RegistrationFieldsTypes as RegistrationFieldsTypes,
  RegistrationInputFieldProps,
  RegistrationFieldName,
} from './types';

/*Hooks*/
import { useToggle } from 'hooks/useToggle';
import { useAppDispatch } from 'store/store';
import { useNavigate } from 'react-router-dom';

/*Constants*/
import { registerFields } from './registerFields';
import { registrationSchema } from './registerFieldsValidations';
import { paths } from 'paths/paths';
import { textKeys } from 'utils/textKeys';
import { IDsForTesting } from 'utils/idsForTesting';

/*State management*/
import { signUp } from 'store/user.actions';
import { CodeStatus } from 'utils/codeStatuses';

/*Helpers*/
import { checkErrorInputField } from 'utils/helpers';

/*Enums*/
import { ErrorFontWeight, ErrorSizes } from 'components/UI/error/enums';
import { ModalColor, ModalSizes } from 'components/UI/modal/enums';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setError,
  } = useForm<RegistrationFieldsTypes>({
    resolver: yupResolver(registrationSchema),
  });

  const [isShown, toggleErrorShow] = useToggle();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const error = (errorStatus: number) => {
    if (errorStatus === CodeStatus.BadRequest) {
      toggleErrorShow();
    }
    if (errorStatus === CodeStatus.Conflict) {
      setFocus(textKeys.email as RegistrationFieldName);
      setError(textKeys.email as RegistrationFieldName, {
        type: 'duplicate',
        message: textKeys.registration_input_email_duplicate_error,
      });
    }
  };

  const registrationError = (
    <RegistrationError>{textKeys.registration_server_error}</RegistrationError>
  );

  const onSubmit: SubmitHandler<RegistrationFieldsTypes> = useCallback(
    ({ firstName, lastName, password, country, address, email }) => {
      dispatch(signUp({ firstName, lastName, password, country, address, email }))
        .unwrap()
        .then((status) => status === CodeStatus.OK && navigate(paths.SUCCESSFULLREGISTRATION))
        .catch((errorStatus) => error(errorStatus.statusCode));
    },
    []
  );

  return (
    <>
      <StyledRegistrationFormWrapper onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <StyledRegistrationHeader>{textKeys.registration_page_title}</StyledRegistrationHeader>
        {registerFields.map(
          ({
            name,
            type,
            label,
            seeIcon,
            id,
            errorId,
            idShowPasswordIcon,
            idUnshowPasswordIcon,
          }: RegistrationInputFieldProps) => (
            <InputField
              id={id}
              errorId={errorId}
              idShowPasswordIcon={idShowPasswordIcon}
              idUnshowPasswordIcon={idUnshowPasswordIcon}
              key={name}
              {...register(name)}
              type={type}
              name={name}
              label={label}
              seeIcon={seeIcon}
              validate={checkErrorInputField(errors, name)}
              error={errors[name]}
            />
          )
        )}
        <Checkbox
          id={IDsForTesting.registration_checkbox_terms_and_conditions_id}
          {...register('termsAndConditions', {
            required: textKeys.registration_terms_and_conditions_required_error,
          })}
        >
          <span>{textKeys.registration_checkbox_agree}</span>{' '}
          <TermsAndConditions
            id={IDsForTesting.registration_clickable_text_terms_and_conditions_id}
          />
        </Checkbox>
        {errors && (
          <Error
            size={ErrorSizes.Small}
            fontWeight={ErrorFontWeight.Normal}
            errorId={IDsForTesting.registration_input_terms_and_conditions_error_message_id}
          >
            {errors.termsAndConditions?.message}
          </Error>
        )}
        <Button color={'primary'} size={'l'} id={IDsForTesting.registration_button_sign_up_id}>
          {textKeys.registration_button_signup}
        </Button>
        {isShown && (
          <ModalState
            confirmFunction={() => true}
            modalHeader=''
            color={ModalColor.Warning}
            size={ModalSizes.Small}
            isShown={isShown}
            hideModal={toggleErrorShow}
            modalContent={registrationError}
          />
        )}
      </StyledRegistrationFormWrapper>
    </>
  );
};

export default RegistrationForm;
