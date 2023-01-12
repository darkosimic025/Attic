import React, { ForwardedRef } from 'react';

/*Styled components*/
import {
  FocusInput,
  NotSeeIcon,
  SeeIcon,
  StyledInput,
  StyledLabel,
  Wrapper,
} from './InputField.styled';
import { Error } from 'components/UI/error/Error';

/*Hooks*/
import { useToggle } from 'hooks/useToggle';

/*Types*/
import { InputFieldProps } from './types';

/*Enums*/
import { ErrorFontWeight, ErrorSizes } from 'components/UI/error/enums';

export const InputField = React.forwardRef(
  (
    {
      type,
      label,
      name,
      seeIcon,
      validate,
      error,
      errorId,
      value,
      idUnshowPasswordIcon,
      idShowPasswordIcon,
      ...props
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isShown, toggle] = useToggle();

    const passwordIcon = () => {
      if (seeIcon) {
        if (isShown) {
          return <NotSeeIcon id={idUnshowPasswordIcon} onClick={toggle} />;
        } else {
          return <SeeIcon id={idShowPasswordIcon} onClick={toggle} />;
        }
      }
    };

    return (
      <>
        <Wrapper>
          <StyledInput
            type={isShown ? 'text' : type}
            ref={ref}
            name={name}
            validate={validate}
            value={value}
            {...props}
          />
          <StyledLabel htmlFor={name} validate={validate}>
            {label}
          </StyledLabel>
          <FocusInput />
          {passwordIcon()}
        </Wrapper>
        <Error errorId={errorId} fontWeight={ErrorFontWeight.Normal} size={ErrorSizes.Small}>
          {error?.message}
        </Error>
      </>
    );
  }
);

InputField.displayName = 'InputField';
