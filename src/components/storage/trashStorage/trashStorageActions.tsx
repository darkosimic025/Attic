import React from 'react';

/*Types*/
import { EuiTableActionsColumnType } from '@elastic/eui';
import { StorageItem } from './types';
import { ActionTabGeneratorProps, GenerateActionsProps } from './types';

/*Icons*/
import { FolderOpen, DeleteArrowBack } from '@styled-icons/fluentui-system-regular';

/*Components*/
import { ActionsTab } from '../actions/actionTab/ActionsTab';

/*Hooks*/
import { useAppDispatch } from 'store/store';

/*State management*/
import { setCurrentItem } from 'store/table.slice';

/*Enums*/
import { StorageActionModals } from '../modals/enums';

/*Constants*/
import { textKeys } from 'utils/textKeys';

export const generateActions = ({
  setIsShown,
  setModal,
  setItem,
  setItemName,
}: GenerateActionsProps): EuiTableActionsColumnType<StorageItem> => {
  const dispatch = useAppDispatch();
  const fileType = 2;
  const folderType = 1;

  const generateActionsTab = ({ icon, label, handleClick, item }: ActionTabGeneratorProps) => {
    return {
      available: ({ itemType }: StorageItem) => {
        return itemType == item ? true : false;
      },
      render: ({ itemId, name, extension }: StorageItem) => {
        return (
          <ActionsTab
            hasLabel={false}
            key={label}
            icon={icon}
            label={label}
            handleClick={() => handleClick({ itemId, name, extension } as StorageItem)}
          />
        );
      },
    };
  };

  const actionsArray = [
    {
      item: folderType,
      icon: <FolderOpen />,
      label: '',
      handleClick: ({ itemId }: StorageItem) => {
        dispatch(setCurrentItem(itemId));
      },
    },
    {
      item: folderType,
      icon: <DeleteArrowBack />,
      label: '',
      handleClick: ({ itemId, name }: StorageItem) => {
        setIsShown(true);
        setItem(itemId);
        setModal(StorageActionModals.RestoreItem);
        setItemName(name);
      },
    },
    {
      item: fileType,
      icon: <DeleteArrowBack />,
      label: '',
      handleClick: ({ itemId, name }: StorageItem) => {
        setIsShown(true);
        setItem(itemId);
        setModal(StorageActionModals.RestoreItem);
        setItemName(name);
      },
    },
  ];

  const actions = actionsArray.map(({ item, icon, label, handleClick }) => {
    return generateActionsTab({ item, icon, label, handleClick });
  });

  return {
    name: textKeys.storage_column_label_actions,
    width: '90px',
    actions: actions,
  };
};
