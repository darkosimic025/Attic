/*Enums*/
import { ModalColor, ModalSizes } from './enums';

export interface ModalProps {
  modalContent: JSX.Element;
  modalHeader: string;
  size: ModalSizes;
  color: ModalColor;
  confirmFunction: () => void;
  isShown?: boolean;
  hideModal?: () => void;
  confirmName?: string;
  onClose?: () => void;
}

export type StyledModalProps = {
  size: ModalSizes;
  color: ModalColor;
};

export interface RefObject {
  openModal: () => void;
  closeModal: () => void;
}
