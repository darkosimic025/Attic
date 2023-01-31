import React from 'react';

/* Styled components */
import { StyledButton } from './Button.styled';

/* Types */
import { ButtonProps } from './types';

export const Button = ({ children, size, color, onClick, id }: ButtonProps) => (
  <StyledButton size={size} color={color} onClick={onClick} id={id}>
    {children}
  </StyledButton>
);
