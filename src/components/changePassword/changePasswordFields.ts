/*Utils*/
import { textKeys } from 'utils/textKeys';

/* Types */
import { ChangePasswordFieldProps, ChangePasswordName, ChangePasswordType } from './types';

export const changePasswordFields: ChangePasswordFieldProps[] = [
  {
    name: textKeys.change_password_current_password_text as ChangePasswordName,
    label: textKeys.change_password_current_password,
    type: textKeys.password_type as ChangePasswordType,
    seeIcon: true,
    id: textKeys.change_password_current_password_id,
  },
  {
    name: textKeys.change_password_new_password_text as ChangePasswordName,
    label: textKeys.change_password_new_password,
    type: textKeys.password_type as ChangePasswordType,
    seeIcon: true,
    id: textKeys.change_password_new_password_id,
  },
  {
    name: textKeys.change_password_confirm_new_password_text as ChangePasswordName,
    label: textKeys.change_password_confirm_new_password,
    type: textKeys.password_type as ChangePasswordType,
    seeIcon: true,
    id: textKeys.change_password_confirm_new_password_id,
  },
];
