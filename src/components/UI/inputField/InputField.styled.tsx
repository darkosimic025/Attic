/*Libraries*/
import { EyeOff, EyeShow } from '@styled-icons/fluentui-system-regular';
import styled from 'styled-components';

/*Types*/
import { InputFieldStyleProps, WrapperProps } from './types';

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0.5rem auto 0.2rem auto;
`;

export const StyledInput = styled.input<InputFieldStyleProps>`
  width: 100%;
  height: 30px;
  padding: 5px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.inputFocus};
  border: 2px solid
    ${({ validate, theme }) => (validate ? theme.colors.warning : theme.colors.borderInput)};

  &:focus {
    background-color: ${({ theme }) => theme.colors.light};
    transition: 0.02s;
    border: 2px solid ${({ theme }) => theme.colors.borderInput};
    outline: 0;
  }
`;

export const StyledLabel = styled.label<InputFieldStyleProps>`
  color: ${({ validate, theme }) => (validate ? theme.colors.warning : theme.colors.dark)};
  font-weight: bold;
  transition: 0.2s;
  margin-bottom: 8px;
  order: -1;

  ${StyledInput}:focus ~ & {
    color: ${({ theme }) => theme.colors.main};
    transform: scale(0.98);
    transition: 0.1s;
  }
`;

export const FocusInput = styled.span`
  border-radius: 0 0 5px 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;

  background-color: ${({ theme }) => theme.colors.main};
  visibility: hidden;

  ${StyledInput}:focus ~ & {
    width: 100%;
    transition: 0.2s;
    visibility: visible;
  }
`;

export const SeeIcon = styled(EyeShow)`
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  cursor: pointer;
  bottom: 13%;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.shadowLight};

  &:hover {
    color: ${({ theme }) => theme.colors.shadowDark};
    transition: 0.2s;
  }
`;

export const NotSeeIcon = styled(EyeOff)`
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  cursor: pointer;
  bottom: 13%;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.shadowLight};

  &:hover {
    color: ${({ theme }) => theme.colors.shadowDark};
    transition: 0.2s;
  }
`;
