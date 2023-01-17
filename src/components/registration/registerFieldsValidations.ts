/*Libraries*/
import * as yup from 'yup';
import YupPassword from 'yup-password';

/*Constants*/
import { textKeys } from 'utils/textKeys';

YupPassword(yup);

export const registrationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(textKeys.registration_error_required)
    .max(255, textKeys.registration_input_firstName_max_length_error)
    .matches(/^[a-zA-Z ]*$/, textKeys.registration_input_firstName_invalid_error)
    .trim(),

  lastName: yup
    .string()
    .required(textKeys.registration_error_required)
    .max(255, textKeys.registration_input_lastName_max_length_error)
    .matches(/^[a-zA-Z ]*$/, textKeys.registration_input_lastName_invalid_error)
    .trim(),
  email: yup
    .string()
    .required(textKeys.registration_error_required)
    .max(255, textKeys.registration_input_email_max_length_error)
    .email(textKeys.registration_input_email_invalid_error)
    .trim(),
  password: yup
    .string()
    .required(textKeys.registration_error_required)
    .max(255, textKeys.registration_input_password_length_max_error)
    .min(8, textKeys.registration_input_password_length_min_error)
    .minLowercase(1, textKeys.registration_input_password_lowercase_error)
    .minUppercase(1, textKeys.registration_input_password_uppercase_error)
    .minNumbers(1, textKeys.registration_input_password_number_error)
    .minSymbols(1, textKeys.registration_input_password_symbol_error),
  confirmPassword: yup
    .string()
    .required(textKeys.registration_error_required)
    .oneOf([yup.ref('password'), null], textKeys.registration_input_password_match_error),
  country: yup
    .string()
    .required(textKeys.registration_error_required)
    .max(255, textKeys.registration_input_country_max_length_error)
    .matches(/^[a-zA-Z ]*$/, textKeys.registration_input_country_invalid_error)
    .trim(),
  address: yup
    .string()
    .required(textKeys.registration_error_required)
    .max(255, textKeys.registration_input_address_max_length_error)
    .matches(/^[a-zA-Z0-9-/ ]*$/, textKeys.registration_input_address_invalid_error)
    .trim(),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], textKeys.registration_terms_and_conditions_required_error),
});
