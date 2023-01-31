import React from 'react';

/*Types*/
import { EuiTableActionsColumnType } from '@elastic/eui';
import { StorageItem } from './types';
import { ActionTabGeneratorProps, GenerateActionsProps } from './types';

/*Icons*/
import {
  FolderPerson,
  FolderArrowRight,
  FolderOpen,
  TextEditStyle,
  Delete,
  ArrowDownload,
  Cut,
  ArrowImport,
} from '@styled-icons/fluentui-system-regular';

/*Components*/
import { ActionsTab } from '../actions/actionTab/ActionsTab';

/*Hooks*/
import { useAppDispatch } from 'store/store';

/*State management*/
import { setCurrentItem, setCuttedItem } from 'store/table.slice';

/*Actions*/
import { downloadFile } from '../actions/fileActions/downloadFile';
import { MoveFile } from '../actions/fileActions/moveFile';

/*Enums*/
import { StorageActionModals } from '../modals/enums';

/*Constants*/
import { textKeys } from 'utils/textKeys';

export const generateActions = ({
  setIsShown,
  setModal,
  setItem,
  setItemName,
  cuttedItem,
  getItems,
  currentItem,
  toasts,
  setToasts,
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
            hasLabel={true}
            key={label}
            icon={icon}
            label={label}
            handleClick={() => handleClick({ itemId, name, extension } as StorageItem)}
          />
        );
      },
    };
  };

  const generateCutPasteTabs = () => {
    return [
      {
        available: ({ itemType }: StorageItem) => {
          return itemType == fileType && cuttedItem == null ? true : false;
        },
        render: ({ itemId }: StorageItem) => {
          return (
            <ActionsTab
              hasLabel={true}
              icon={<Cut />}
              label={textKeys.cut_file_action}
              handleClick={() => {
                dispatch(setCuttedItem(itemId));
              }}
            />
          );
        },
      },
      {
        available: ({ itemType }: StorageItem) => {
          return itemType == folderType && cuttedItem != null ? true : false;
        },
        render: ({ itemId }: StorageItem) => {
          return (
            <ActionsTab
              hasLabel={true}
              icon={<ArrowImport />}
              label={textKeys.paste_here_action}
              handleClick={() => {
                MoveFile({
                  cuttedItem,
                  newFolder: itemId as string,
                  getItems,
                  currentItem,
                  setToasts,
                  toasts,
                });
                dispatch(setCuttedItem(null));
              }}
            />
          );
        },
      },
    ];
  };

  const actionsArray = [
    {
      item: folderType,
      icon: <FolderOpen />,
      label: textKeys.open_folder_action,
      handleClick: ({ itemId }: StorageItem) => {
        dispatch(setCurrentItem(itemId));
      },
    },
    {
      item: folderType,
      icon: <FolderArrowRight />,
      label: textKeys.share_folder_action,
      handleClick: ({ itemId }: StorageItem) => {
        setIsShown(true);
        setItem(itemId);
        setModal(StorageActionModals.ShareFolder);
      },
    },
    {
      item: folderType,
      icon: <FolderPerson />,
      label: textKeys.invite_to_folder_action,
      handleClick: ({ itemId }: StorageItem) => {
        setIsShown(true);
        setItem(itemId);
        setModal(StorageActionModals.InviteFolder);
      },
    },
    {
      item: folderType,
      icon: <TextEditStyle />,
      label: textKeys.rename_folder_action,
      handleClick: ({ itemId, name }: StorageItem) => {
        setIsShown(true);
        setItem(itemId);
        setModal(StorageActionModals.RenameFolder);
        setItemName(name);
      },
    },
    {
      item: folderType,
      icon: <Delete />,
      label: textKeys.delete_folder_action,
      handleClick: ({ itemId, name }: StorageItem) => {
        setIsShown(true);
        setItem(itemId);
        setModal(StorageActionModals.DeleteFolder);
        setItemName(name);
      },
    },
    {
      item: fileType,
      icon: <ArrowDownload />,
      label: textKeys.download_file_action,
      handleClick: ({ itemId, name, extension }: StorageItem) => {
        setItem(itemId);
        downloadFile({ fileId: itemId as string, name, extension, setToasts, toasts });
      },
    },
    {
      item: fileType,
      icon: <TextEditStyle />,
      label: textKeys.rename_file_action,
      handleClick: ({ itemId, name }: StorageItem) => {
        setIsShown(true);
        setItem(itemId);
        setModal(StorageActionModals.RenameFile);
        setItemName(name);
      },
    },
    {
      item: fileType,
      icon: <Delete />,
      label: textKeys.delete_file_action,
      handleClick: ({ itemId, name }: StorageItem) => {
        setIsShown(true);
        setItem(itemId);
        setModal(StorageActionModals.DeleteFile);
        setItemName(name);
      },
    },
  ];

  const actions = actionsArray.map(({ item, icon, label, handleClick }) => {
    return generateActionsTab({ item, icon, label, handleClick });
  });

  const actionsCutPaste = generateCutPasteTabs();

  return {
    name: textKeys.storage_column_label_actions,
    width: '90px',
    actions: [...actions, ...actionsCutPaste],
  };
};
