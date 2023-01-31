import React, { useCallback, useState } from 'react';

/*Libraries*/
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

/*Compoenents*/
import { InputField } from 'components/UI/inputField/InputField';
import { Error } from 'components/UI/error/Error';
import { Button } from 'components/UI/button/Button';

/*Styled components*/
import {
  Layout,
  PersonalInformationInputFieldsWrapper,
  PersonalInformationWrapper,
} from './PersonalInformation.styled';

/*Hooks*/
import { useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';

/*Types*/
import { PersonalInformationInputFieldProps, PersonalInformationFiledsTypes } from './types';
import { RootState } from 'store/store';
import { UserData } from 'store/types';

/*Constants*/
import { PersonalInformationFields } from './personalInformationFields';
import { personalInformationSchema } from './personalInformationFieldsValidation';
import { textKeys } from 'utils/textKeys';

/*Helpers*/
import { checkErrorInputField } from 'utils/helpers';

/*State management*/
import { updateUserPersonalInformation } from 'store/account.actions';
import { ErrorFontWeight, ErrorSizes } from 'components/UI/error/enums';
import { IDsForTesting } from 'utils/idsForTesting';

export const PersonalInformationSection = () => {
  const userPersonalInformation = useSelector<RootState, UserData>((state) => state.user);

  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<PersonalInformationFiledsTypes>({
    resolver: yupResolver(personalInformationSchema),
    defaultValues: userPersonalInformation,
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<PersonalInformationFiledsTypes> = useCallback(
    ({ firstName, lastName, country, address }) => {
      if (isDirty) {
        setErrorMessage('');
        dispatch(updateUserPersonalInformation({ firstName, lastName, country, address }));
      } else {
        setErrorMessage(textKeys.personal_information_require_some_changes_before_update);
      }
    },
    [isDirty]
  );

  return (
    <Layout>
      <PersonalInformationWrapper>
        <PersonalInformationInputFieldsWrapper>
          {PersonalInformationFields.map(
            ({
              name,
              type,
              label,
              seeIcon,
              id,
              disabled,
              errorId,
            }: PersonalInformationInputFieldProps) => (
              <InputField
                id={id}
                errorId={errorId}
                key={name}
                disabled={disabled}
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
          <Error
            errorId={IDsForTesting.personal_information_error_from_server_id}
            size={ErrorSizes.Medium}
            fontWeight={ErrorFontWeight.Bold}
          >
            {errorMessage}
          </Error>
        </PersonalInformationInputFieldsWrapper>
      </PersonalInformationWrapper>

      <Button
        color='primary'
        id={IDsForTesting.personal_information_button_save_id}
        size='m'
        onClick={handleSubmit(onSubmit)}
      >
        {textKeys.button_save}
      </Button>
    </Layout>
  );
};
