import React, { useCallback } from 'react';

/*Enums*/
import { ModalColor, ModalSizes } from 'components/UI/modal/enums';

/*Helpers*/
import { ModalState } from 'components/UI/modal/ModalWithState';

/*Services*/
import trashService from 'services/trashServices';

/*Styled components*/
import { BoldRestoreItem, RestoreItemModal } from './restoreItem.styled';

/*Types*/
import { RestoreItemProps } from './types';
import { Toast } from '@elastic/eui/src/components/toast/global_toast_list';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { Toasts } from 'utils/toastsTrash';

export const RestoreItem = ({
  item,
  itemName,
  isShown,
  setIsShown,
  getItems,
  currentItem,
  toasts,
  setToasts,
}: RestoreItemProps) => {
  const restoreItem = useCallback(() => {
    trashService
      .restoreItem({ itemId: item })
      .then(() => {
        setToasts(toasts.concat(Toasts.restoreItem.success as Toast));
        setIsShown(false);
        getItems(currentItem);
      })
      .catch(() => setToasts(toasts.concat(Toasts.restoreItem.error as Toast)));
  }, []);
  const restoreItemModal = (
    <RestoreItemModal>
      {textKeys.restore_item_confirm_sentence_1}{' '}
      <BoldRestoreItem>&nbsp;{itemName}&nbsp;</BoldRestoreItem>{' '}
      {textKeys.restore_item_confirm_sentence_2}
    </RestoreItemModal>
  );

  return (
    <ModalState
      modalHeader={textKeys.restore_item_action}
      color={ModalColor.Warning}
      size={ModalSizes.Small}
      isShown={isShown}
      confirmName={textKeys.restore_item_confirm_button}
      confirmFunction={restoreItem}
      hideModal={() => setIsShown(false)}
      modalContent={restoreItemModal}
    />
  );
};
