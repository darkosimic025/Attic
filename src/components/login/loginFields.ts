/*Libraires */
import * as yup from 'yup';
import YupPassword from 'yup-password';

/*Utils*/
import { textKeys } from 'utils/textKeys';
import { IDsForTesting } from 'utils/idsForTesting';

/*Types*/
import { LoginInputFieldProps, LoginInputName, LoginInputFieldType } from './types';

YupPassword(yup);

export const loginFields: LoginInputFieldProps[] = [
  {
    name: textKeys.text_email as LoginInputName,
    label: textKeys.login_input_email_label,
    type: textKeys.text_text as LoginInputFieldType,
    seeIcon: false,
    id: IDsForTesting.login_input_email_id,
    errorId: IDsForTesting.login_input_email_error_message_id,
  },
  {
    name: textKeys.text_password as LoginInputName,
    label: textKeys.login_input_password_label,
    type: textKeys.text_password as LoginInputFieldType,
    seeIcon: true,
    id: IDsForTesting.login_input_password_id,
    errorId: IDsForTesting.login_input_password_error_message_id,
    idShowPasswordIcon: IDsForTesting.login_input_password_show_password_icon_id,
    idUnshowPasswordIcon: IDsForTesting.login_input_password_unshow_password_id,
  },
];

export const loginSchema = yup.object().shape({
  email: yup.string().required(textKeys.registration_error_required),
  password: yup.string().required(textKeys.registration_error_required),
});
