import styled from 'styled-components';

/*Enums*/
import { ErrorFontWeight, ErrorSizes } from './enums';

/*Types*/
import { ErrorMessageStyleProps } from './types';

export const ErrorMessage = styled.p<ErrorMessageStyleProps>`
  display: inline-block;
  height: 1rem;
  margin: 0;
  font-size: ${({ size }) => {
    switch (size) {
      case ErrorSizes.Small:
        return '10px';
      case ErrorSizes.Medium:
        return '12px';
      case ErrorSizes.Large:
        return '14px';
    }
  }};
  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case ErrorFontWeight.Bold:
        return 'bold';
      case ErrorFontWeight.Normal:
        return 'normal';
    }
  }};
  color: ${({ theme }) => theme.colors.warning};
`;

export const WrapperError = styled.div`
  width: 100%;
  height: 1.2rem;
  display: flex;
  margin: 0 auto;
`;
