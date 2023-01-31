import React, { useCallback } from 'react';

/*Enums*/
import { ModalColor, ModalSizes } from 'components/UI/modal/enums';

/*Helpers*/
import { ModalState } from 'components/UI/modal/ModalWithState';

/*Services*/
import fileService from 'services/fileServices';

/*Styled components*/
import { BoldDeleteFile, DeleteFileModal } from './deleteFile.styled';

/*Types*/
import { DeleteFileProps } from './types';
import { Toast } from '@elastic/eui/src/components/toast/global_toast_list';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { Toasts } from 'utils/toastsFileFolders';

export const DeleteFile = ({
  item,
  itemName,
  isShown,
  setIsShown,
  getItems,
  currentItem,
  toasts,
  setToasts,
}: DeleteFileProps) => {
  const deleteFile = useCallback(() => {
    fileService
      .deleteFile({ fileId: item })
      .then(() => {
        setIsShown(false);
        setToasts(toasts.concat(Toasts.deleteFile.success as Toast));
        getItems(currentItem);
      })
      .catch(() => {
        setToasts(toasts.concat(Toasts.deleteFile.error as Toast));
      });
  }, []);

  const deleteFileModal = (
    <DeleteFileModal>
      {textKeys.delete_file_confirm_sentence_1}{' '}
      <BoldDeleteFile>&nbsp;{itemName}&nbsp;</BoldDeleteFile>{' '}
      {textKeys.delete_file_confirm_sentence_2}
    </DeleteFileModal>
  );

  return (
    <ModalState
      modalHeader={textKeys.delete_file_action}
      color={ModalColor.Warning}
      size={ModalSizes.Small}
      isShown={isShown}
      confirmName={textKeys.delete_file_confirm_button}
      confirmFunction={deleteFile}
      hideModal={() => setIsShown(false)}
      modalContent={deleteFileModal}
    />
  );
};
