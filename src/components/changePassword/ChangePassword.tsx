import React from 'react';

/*Libraries*/
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

/* Components */
import { InputField } from 'components/UI/inputField/InputField';
import { Button } from 'components/UI/button/Button';

/*Styled components*/
import {
  StyledChangePasswordWrap,
  Layout,
  ChangePasswordFieldsWrap,
} from './ChangePassword.styled';

/* Types */
import { ChangePasswordFieldProps, ChangePasswordName, ChangePasswordTypes } from './types';

/* Constants */
import { changePasswordFields } from './changePasswordFields';
import { changePasswordSchema } from './changePasswordFieldsValidation';

/* Utils */
import { textKeys } from 'utils/textKeys';

/* Services */
import { accountServices } from 'services/accountServices';

export const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setError,
  } = useForm<ChangePasswordTypes>({
    resolver: yupResolver(changePasswordSchema),
  });

  const errorCurrentPasswordIncorrect = () => {
    setFocus(textKeys.change_password_current_password_text as ChangePasswordName);
    setError(textKeys.change_password_current_password_text as ChangePasswordName, {
      type: 'incorrect',
      message: textKeys.change_password_error,
    });
  };

  const onSubmit: SubmitHandler<ChangePasswordTypes> = ({ currentPassword, newPassword }) => {
    accountServices
      .updateChangePassword({ currentPassword, newPassword })
      .catch(() => errorCurrentPasswordIncorrect());
  };

  return (
    <Layout>
      <StyledChangePasswordWrap>
        <ChangePasswordFieldsWrap>
          {changePasswordFields.map(
            ({ name, type, label, seeIcon, id }: ChangePasswordFieldProps) => (
              <InputField
                id={id}
                key={name}
                {...register(name)}
                name={name}
                type={type}
                label={label}
                seeIcon={seeIcon}
                error={errors[name]}
              />
            )
          )}
        </ChangePasswordFieldsWrap>
        <Button
          color={'primary'}
          size={'m'}
          id={textKeys.button_sign_in_id}
          onClick={handleSubmit(onSubmit)}
        >
          {textKeys.change_password_save_button}
        </Button>
      </StyledChangePasswordWrap>
    </Layout>
  );
};
