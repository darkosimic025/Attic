/*Constants*/
import { IDsForTesting } from 'utils/idsForTesting';
import { textKeys } from 'utils/textKeys';

/*Types*/
import {
  RegistrationInputFieldProps,
  RegistrationFieldName,
  RegistrationInputFieldType,
} from './types';

export const registerFields = <RegistrationInputFieldProps[]>[
  {
    name: textKeys.first_name as RegistrationFieldName,
    label: textKeys.registration_input_firstName_label,
    seeIcon: false,
    type: textKeys.text_type as RegistrationInputFieldType,
    id: IDsForTesting.registration_input_firstName_id,
    errorId: IDsForTesting.registration_input_firstName_error_message_id,
  },
  {
    name: textKeys.last_name as RegistrationFieldName,
    label: textKeys.registration_input_lastName_label,
    seeIcon: false,
    type: textKeys.text_type as RegistrationInputFieldType,
    id: IDsForTesting.registration_input_lastName_id,
    errorId: IDsForTesting.registration_input_lastName_error_message_id,
  },
  {
    name: textKeys.email as RegistrationFieldName,
    label: textKeys.registration_input_email_label,
    seeIcon: false,
    type: textKeys.text_type as RegistrationInputFieldType,
    id: IDsForTesting.registration_input_email_id,
    errorId: IDsForTesting.registration_input_email_error_message_id,
  },
  {
    name: textKeys.password as RegistrationFieldName,
    label: textKeys.registration_input_password_label,
    seeIcon: true,
    type: textKeys.password_type as RegistrationInputFieldType,
    id: IDsForTesting.registration_input_password_id,
    errorId: IDsForTesting.registration_input_password_error_message_id,
    idShowPasswordIcon: IDsForTesting.registration_input_password_show_password_icon_id,
    idUnshowPasswordIcon: IDsForTesting.registration_input_password_unshow_password_id,
  },
  {
    name: textKeys.confirmPassword as RegistrationFieldName,
    label: textKeys.registration_input_confirmPassword_label,
    seeIcon: true,
    type: textKeys.password_type as RegistrationInputFieldType,
    id: IDsForTesting.registration_input_confirm_password_id,
    errorId: IDsForTesting.registration_input_confirm_password_error_message_id,
    idShowPasswordIcon: IDsForTesting.registration_input_password_show_confirm_password_icon_id,
    idUnshowPasswordIcon: IDsForTesting.registration_input_password_unshow_confirm_password_id,
  },
  {
    name: textKeys.country as RegistrationFieldName,
    label: textKeys.registration_input_country_label,
    seeIcon: false,
    type: textKeys.text_type as RegistrationInputFieldType,
    id: IDsForTesting.registration_input_country_id,
    errorId: IDsForTesting.registration_input_country_error_message_id,
  },
  {
    name: textKeys.address as RegistrationFieldName,
    label: textKeys.registration_input_address_label,
    seeIcon: false,
    type: textKeys.text_type as RegistrationInputFieldType,
    id: IDsForTesting.registration_input_address_id,
    errorId: IDsForTesting.registration_input_address_error_message_id,
  },
];
