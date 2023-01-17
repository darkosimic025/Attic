export interface RegistrationFieldsTypes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  address: string;
  termsAndConditions?: boolean;
  confirmPassword?: string;
}

export type RegistrationInputFieldType = 'text' | 'password';

export interface RegistrationInputFieldProps {
  type: RegistrationInputFieldType;
  seeIcon: boolean;
  label: string;
  name: 'firstName' | 'lastName' | 'email' | 'password' | 'confirmPassword' | 'country' | 'address';
  id: string;
  errorId: string;
  idUnshowPasswordIcon?: string;
  idShowPasswordIcon?: string;
}

export type RegistrationFieldName =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'country'
  | 'address';
