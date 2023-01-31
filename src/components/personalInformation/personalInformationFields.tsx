/*Types*/
import { PersonalInformationFieldName, PersonalInformationInputFieldType } from './types';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { IDsForTesting } from 'utils/idsForTesting';

export const PersonalInformationFields = [
  {
    name: textKeys.first_name as PersonalInformationFieldName,
    label: textKeys.personal_information_input_firstName_label,
    seeIcon: false,
    type: textKeys.text_type as PersonalInformationInputFieldType,
    id: IDsForTesting.personal_information_input_firstName_id,
    errorId: IDsForTesting.personal_information_input_firstName_error_message_id,
  },
  {
    name: textKeys.last_name as PersonalInformationFieldName,
    label: textKeys.personal_information_input_lastName_label,
    seeIcon: false,
    type: textKeys.text_type as PersonalInformationInputFieldType,
    id: IDsForTesting.personal_information_input_lastName_id,
    errorId: IDsForTesting.personal_information_input_lastName_error_message_id,
  },
  {
    name: textKeys.email as PersonalInformationFieldName,
    label: textKeys.personal_information_input_email_label,
    seeIcon: false,
    type: textKeys.text_type as PersonalInformationInputFieldType,
    id: IDsForTesting.personal_information_input_email_id,
    disabled: true,
  },
  {
    name: textKeys.country as PersonalInformationFieldName,
    label: textKeys.personal_information_input_country_label,
    seeIcon: false,
    type: textKeys.text_type as PersonalInformationInputFieldType,
    id: IDsForTesting.personal_information_input_country_id,
    errorId: IDsForTesting.personal_information_input_country_error_message_id,
  },
  {
    name: textKeys.address as PersonalInformationFieldName,
    label: textKeys.personal_information_input_address_label,
    seeIcon: false,
    type: textKeys.text_type as PersonalInformationInputFieldType,
    id: IDsForTesting.personal_information_input_address_id,
    errorId: IDsForTesting.personal_information_input_address_error_message_id,
  },
];
