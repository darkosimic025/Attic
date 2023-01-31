import React from 'react';
import ReactDOM from 'react-dom';

/*Types*/
import { ModalProps } from './types';

/*Styled components*/
import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
  Footer,
  ConfirmButton,
} from './Modal.styled';

/*Constants*/
import { textKeys } from 'utils/textKeys';

export const ModalState = ({
  isShown,
  hideModal,
  modalContent,
  modalHeader,
  size,
  color,
  confirmName,
  confirmFunction,
}: ModalProps) => {
  const modal = (
    <>
      <Backdrop onClick={hideModal} />
      <Wrapper>
        <StyledModal size={size} color={color}>
          <Header>
            <HeaderText>{modalHeader}</HeaderText>
          </Header>
          <Content>{modalContent}</Content>
          <Footer>
            <CloseButton size={size} color={color} onClick={hideModal}>
              {textKeys.button_close_modal}
            </CloseButton>
            <ConfirmButton size={size} color={color} onClick={() => confirmFunction()}>
              {confirmName}
            </ConfirmButton>
          </Footer>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isShown
    ? ReactDOM.createPortal(modal, document.getElementById('modal-root') as HTMLDivElement)
    : null;
};
