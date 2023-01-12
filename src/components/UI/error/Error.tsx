import React from 'react';

/*Styled components*/
import { ErrorMessage, WrapperError } from './Error.styled';

/*Types*/
import { ErrorProps } from './types';

export const Error = ({ children, errorId, size, fontWeight }: ErrorProps) => (
  <WrapperError>
    <ErrorMessage size={size} fontWeight={fontWeight} id={errorId}>
      {children}
    </ErrorMessage>
  </WrapperError>
);
