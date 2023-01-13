import { RegisterOptions } from 'react-hook-form';

export interface LoginFieldsTypes {
  email: string;
  password: string;
}

export type LoginInputFieldType = 'text' | 'password';

export type LoginInputName = 'email' | 'password';
export interface LoginInputFieldProps {
  id?: string;
  type: LoginInputFieldType;
  seeIcon: boolean;
  label: string;
  validations?: RegisterOptions;
  name: LoginInputName;
  errorId: string;
  idUnshowPasswordIcon?: string;
  idShowPasswordIcon?: string;
}
