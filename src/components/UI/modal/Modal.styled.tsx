import styled from 'styled-components';

/*Enums*/
import { ModalColor, ModalSizes } from './enums';

/*Types*/
import { StyledModalProps } from './types';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  outline: 0;

  animation-name: fade-translate;
  animation-duration: 0.2s;
  animation-timing-function: linear;

  @keyframes fade-translate {
    0% {
      opacity: 0.1;
      transform: translate(-50%, -48%);
    }
    10% {
      opacity: 0.2;
      transform: translate(-50%, -48.5%);
    }
    20% {
      opacity: 0.3;
      transform: translate(-50%, -49%);
    }
    30% {
      opacity: 0.4;
      transform: translate(-50%, -49.5%);
    }
    40% {
      opacity: 0.5;
      transform: translate(-50%, -50%);
    }
    50% {
      opacity: 0.6;
      transform: translate(-50%, -50.1%);
    }
    60% {
      opacity: 0.7;
      transform: translate(-50%, -50.2%);
    }
    70% {
      opacity: 0.8;
      transform: translate(-50%, -50.3%);
    }
    80% {
      opacity: 0.9;
      transform: translate(-50%, -50.2%);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, -50.1%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(102, 102, 102, 0.4);
  z-index: 3;

  animation-name: fade;
  animation-duration: 0.2s;
  animation-timing-function: ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledModal = styled.div<StyledModalProps>`
  box-shadow: 0 2.7px 9px rgb(0 0 0 / 13%), 0 9.4px 24px rgb(0 0 0 / 9%),
    0 21.8px 43px rgb(0 0 0 / 8%);
  width: ${({ size }) => {
    switch (size) {
      case ModalSizes.Small:
        return '450px';
      case ModalSizes.Medium:
        return '500px';
      case ModalSizes.Large:
        return '700px';
    }
  }};
  background: ${({ theme }) => theme.colors.light};
  position: relative;
  margin: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Header = styled.div`
  width: 100%;
`;

export const HeaderText = styled.h1`
  font-size: x-large;
  font-weight: bold;
  display: flex;
  color: ${({ theme }) => theme.colors.dark};
`;

export const CloseButton = styled.button<StyledModalProps>`
  font-size: ${({ theme }) => theme.fontSize.normal};
  justify-self: flex-end;
  border: none;
  color: ${({ color, theme }) => {
    switch (color) {
      case ModalColor.Primary:
        return theme.colors.main;
      case ModalColor.Warning:
        return theme.colors.warning;
      case ModalColor.Success:
        return theme.colors.success;
    }
  }};
  background-color: transparent;

  border-radius: ${({ theme }) => theme.borderRadius};
  width: ${({ size }) => {
    switch (size) {
      case ModalSizes.Small:
        return '100px';
      case ModalSizes.Medium:
        return '140px';
      case ModalSizes.Large:
        return '200px';
    }
  }};
  height: 30px;
  margin: 15px 0;
  :hover {
    cursor: pointer;
  }
  :hover,
  :focus {
    text-decoration: underline;
    transform: translateY(-1px);
    transition: 0.5s;
  }
  align-self: flex-end;
`;

export const ConfirmButton = styled.button<StyledModalProps>`
  font-size: ${({ theme }) => theme.fontSize.normal};
  justify-self: flex-end;
  border: none;
  z-index: 4;
  background-color: ${({ color, theme }) => {
    switch (color) {
      case ModalColor.Primary:
        return theme.colors.main;
      case ModalColor.Warning:
        return theme.colors.warning;
      case ModalColor.Success:
        return theme.colors.success;
    }
  }};
  color: ${({ theme }) => theme.colors.light};

  border-radius: ${({ theme }) => theme.borderRadius};
  width: ${({ size }) => {
    switch (size) {
      case ModalSizes.Small:
        return '100px';
      case ModalSizes.Medium:
        return '140px';
      case ModalSizes.Large:
        return '200px';
    }
  }};
  height: 30px;
  margin: 15px 0;
  :hover {
    cursor: pointer;
  }
  :hover,
  :focus {
    text-decoration: underline;
    transform: translateY(-1px);
    transition: 0.5s;
  }
  align-self: flex-end;
`;

export const Content = styled.div`
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.light};
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
`;
