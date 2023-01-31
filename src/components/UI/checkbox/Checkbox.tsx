import React, { ForwardedRef } from 'react';

/*Styled components*/
import { CheckboxWrapper, StyledCheckbox, CheckboxLabel } from './Checkbox.styled';

/*Types*/
import { CheckboxProps } from './types';

export const Checkbox = React.forwardRef(
  ({ children, id, ...props }: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <CheckboxWrapper>
        <StyledCheckbox id={id} type='checkbox' ref={ref} {...props} />
        <CheckboxLabel>{children}</CheckboxLabel>
      </CheckboxWrapper>
    );
  }
);

Checkbox.displayName = 'Checkbox';
