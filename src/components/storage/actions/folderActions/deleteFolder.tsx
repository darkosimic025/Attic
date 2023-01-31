import React, { useCallback } from 'react';

/*Enums*/
import { ModalColor, ModalSizes } from 'components/UI/modal/enums';

/*Helpers*/
import { ModalState } from 'components/UI/modal/ModalWithState';

/*Services*/
import folderService from 'services/folderServices';

/*Styled components*/
import { BoldDeleteFolder, DeleteFolderModal } from './deleteFolder.styled';

/*Types*/
import { DeleteFolderProps } from './types';
import { Toast } from '@elastic/eui/src/components/toast/global_toast_list';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { Toasts } from 'utils/toastsFileFolders';

export const DeleteFolder = ({
  item,
  itemName,
  isShown,
  setIsShown,
  getItems,
  currentItem,
  toasts,
  setToasts,
}: DeleteFolderProps) => {
  const deleteFolder = useCallback(() => {
    folderService
      .deleteFolder({ folderId: item })
      .then(() => {
        setToasts(toasts.concat(Toasts.deleteFolder.success as Toast));
        setIsShown(false);
        getItems(currentItem);
      })
      .catch(() => setToasts(toasts.concat(Toasts.deleteFolder.error as Toast)));
  }, []);
  const deleteFolderModal = (
    <DeleteFolderModal>
      {textKeys.delete_folder_confirm_sentence_1}{' '}
      <BoldDeleteFolder>&nbsp;{itemName}&nbsp;</BoldDeleteFolder>{' '}
      {textKeys.delete_folder_confirm_sentence_2}
    </DeleteFolderModal>
  );

  return (
    <ModalState
      modalHeader={textKeys.delete_folder_action}
      color={ModalColor.Warning}
      size={ModalSizes.Small}
      isShown={isShown}
      confirmName={textKeys.delete_folder_confirm_button}
      confirmFunction={deleteFolder}
      hideModal={() => setIsShown(false)}
      modalContent={deleteFolderModal}
    />
  );
};
