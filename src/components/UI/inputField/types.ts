import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

export interface WrapperProps {
  children: ReactNode[] | ReactNode | JSX.Element;
}

export interface InputFieldProps {
  id?: string;
  name: string;
  type: string;
  label: string;
  seeIcon: boolean;
  validate?: boolean;
  error?: FieldError;
  value?: string;
  errorId?: string;
  idShowPasswordIcon?: string;
  idUnshowPasswordIcon?: string;
}

export type InputFieldStyleProps = Pick<InputFieldProps, 'validate'>;
