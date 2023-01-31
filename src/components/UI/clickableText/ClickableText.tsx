import React from 'react';

/*Styled components*/
import { StyledClickableText } from './ClickableText.styled';

/*Types*/
import { ClickableTextProps } from './types';

export const ClickableText = ({ children, id, handleClick }: ClickableTextProps) => (
  <StyledClickableText id={id} onClick={handleClick}>
    {children}
  </StyledClickableText>
);
