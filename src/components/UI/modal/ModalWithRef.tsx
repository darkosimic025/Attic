import React, { forwardRef, Ref, useCallback, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';

/*Types*/
import { ModalProps, RefObject } from './types';

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

export const ModalRef = forwardRef(
  (
    {
      modalContent,
      modalHeader,
      size,
      color,
      confirmFunction,
      confirmName,
      isShown,
      onClose,
    }: ModalProps,
    ref: Ref<RefObject>
  ) => {
    const [showModal, setShowModal] = useState<boolean>(isShown as boolean);

    const open = useCallback(() => {
      setShowModal(true);
    }, []);

    const close = useCallback(() => {
      setShowModal(false);
    }, []);

    useImperativeHandle(
      ref,
      () => {
        return {
          openModal: () => open(),
          closeModal: () => close(),
        };
      },
      [close, open]
    );

    if (showModal) {
      return ReactDOM.createPortal(
        <>
          <Backdrop
            onClick={() => {
              if (onClose) {
                onClose();
              }
              close();
            }}
          />
          <Wrapper>
            <StyledModal size={size} color={color}>
              <Header>
                <HeaderText>{modalHeader}</HeaderText>
              </Header>
              <Content>{modalContent}</Content>
              <Footer>
                <CloseButton
                  size={size}
                  color={color}
                  onClick={() => {
                    close();
                    if (onClose) {
                      onClose();
                    }
                    close();
                  }}
                >
                  {textKeys.button_close_modal}
                </CloseButton>
                <ConfirmButton
                  size={size}
                  color={color}
                  onClick={() => {
                    confirmFunction();
                  }}
                >
                  {confirmName}
                </ConfirmButton>
              </Footer>
            </StyledModal>
          </Wrapper>
        </>,
        document.getElementById('modal-root') as HTMLDivElement
      );
    }

    return null;
  }
);

ModalRef.displayName = 'Modal';
