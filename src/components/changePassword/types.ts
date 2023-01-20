import { RegisterOptions } from 'react-hook-form';

export interface ChangePasswordTypes {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword?: string;
}

export interface Types {
  password: string;
}

export type ChangePasswordType = 'text';

export type ChangePasswordName = 'currentPassword' | 'newPassword' | 'confirmNewPassword';

export interface ChangePasswordFieldProps {
  id?: string;
  type: ChangePasswordType;
  seeIcon: boolean;
  label: string;
  validations?: RegisterOptions;
  name: 'currentPassword' | 'newPassword' | 'confirmNewPassword';
}
