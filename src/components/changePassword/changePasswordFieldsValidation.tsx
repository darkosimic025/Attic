/*Libraires*/

import * as yup from 'yup';

import YupPassword from 'yup-password';

/*Constants*/

import { textKeys } from 'utils/textKeys';

YupPassword(yup);

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required(textKeys.change_password_error_required),

  newPassword: yup

    .string()
    .required(textKeys.change_password_error_required)
    .max(255, textKeys.registration_input_password_length_max_error)
    .min(8, textKeys.registration_input_password_length_min_error)
    .minLowercase(1, textKeys.registration_input_password_lowercase_error)
    .minUppercase(1, textKeys.registration_input_password_uppercase_error)
    .minNumbers(1, textKeys.registration_input_password_number_error)
    .minSymbols(1, textKeys.registration_input_password_symbol_error),

  confirmNewPassword: yup

    .string()
    .required(textKeys.change_password_error_required)
    .oneOf([yup.ref('newPassword'), null], textKeys.registration_input_password_match_error),
});
