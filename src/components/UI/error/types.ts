import { ReactNode } from 'react';
import { ErrorFontWeight, ErrorSizes } from './enums';

export interface ErrorProps {
  size: ErrorSizes;
  fontWeight: ErrorFontWeight;
  children?: ReactNode;
  errorId?: string;
}
export interface ErrorMessageStyleProps {
  size: ErrorSizes;
  fontWeight: ErrorFontWeight;
}
