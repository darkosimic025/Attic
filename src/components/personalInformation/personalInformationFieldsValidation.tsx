/*Libraires*/
import * as yup from 'yup';
import YupPassword from 'yup-password';

/*Constants*/
import { textKeys } from 'utils/textKeys';

YupPassword(yup);

export const personalInformationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(textKeys.personal_information_error_required)
    .max(255, textKeys.personal_information_input_firstName_max_length_error)
    .matches(/^[a-zA-Z ]*$/, textKeys.personal_information_input_firstName_invalid_error)
    .trim(),
  lastName: yup
    .string()
    .required(textKeys.personal_information_error_required)
    .max(255, textKeys.personal_information_input_lastName_max_length_error)
    .matches(/^[a-zA-Z ]*$/, textKeys.personal_information_input_lastName_invalid_error)
    .trim(),
  country: yup
    .string()
    .required(textKeys.personal_information_error_required)
    .max(255, textKeys.personal_information_input_country_max_length_error)
    .matches(/^[a-zA-Z ]*$/, textKeys.personal_information_input_country_invalid_error)
    .trim(),
  address: yup
    .string()
    .required(textKeys.personal_information_error_required)
    .max(255, textKeys.personal_information_input_address_max_length_error)
    .matches(/^[a-zA-Z0-9-/ ]*$/, textKeys.personal_information_input_address_invalid_error)
    .trim(),
});
