export type PersonalInformationFieldName =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'country'
  | 'address';

export type PersonalInformationInputFieldType = 'text';

export interface PersonalInformationInputFieldProps {
  type: PersonalInformationInputFieldType;
  seeIcon: boolean;
  label: string;
  name: 'firstName' | 'lastName' | 'email' | 'country' | 'address';
  id: string;
  value?: string;
  disabled?: boolean;
  errorId?: string;
}

export interface PersonalInformationFiledsTypes {
  firstName: string;
  lastName: string;
  email?: string;
  country: string;
  address: string;
}
