/* Libraries */
import styled from 'styled-components';

/* Types */
import { StyledButtonProps, SizeProp } from './types';

const sizeSettings: { [key: string]: SizeProp } = {
  s: { height: '25px', width: '50px', margin: '15px auto' },
  m: { height: '30px', width: '150px', margin: '20px auto' },
  l: { height: '40px', width: '180px', margin: '25px auto' },
};

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ color }) => {
    //For now, since we have only one button, we will not change it, but in the future if there are more applications. We will make a special component for Danger and Primary.
    switch (color) {
      case 'primary':
        return ({ theme }) => theme.colors.main;
      case 'danger':
        return ({ theme }) => theme.colors.warning;
      case 'secondary':
        return ({ theme }) => theme.colors.secondary;
      default:
        return ({ theme }) => theme.colors.light;
    }
  }};
  width: ${({ size }) => sizeSettings[size].width};
  height: ${({ size }) => sizeSettings[size].height};
  margin: ${({ size }) => sizeSettings[size].margin};
  border: none;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  border-color: none;
  color: ${({ color }) => {
    //For now, since we have only one button, we will not change it, but in the future if there are more applications. We will make a special component for Danger and Primary.
    switch (color) {
      case 'primary':
        return ({ theme }) => theme.colors.light;
      case 'danger':
        return ({ theme }) => theme.colors.light;
      case 'secondary':
        return ({ theme }) => theme.colors.main;
      default:
        return ({ theme }) => theme.colors.dark;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius};
  :hover,
  :focus {
    text-decoration: underline;
    transform: translateY(-1px);
    transition: 0.5s;
  }
`;
