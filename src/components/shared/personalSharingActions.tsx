import React from 'react';

/* Types */
import { EuiTableActionsColumnType } from '@elastic/eui';
import { SharedItem } from './types';
import { SharedGenerateActionProps } from './types';

/* Icon */
import {
  FolderOpen,
  TextEditStyle,
  Delete,
  ArrowDownload,
  Cut,
  ArrowImport,
} from '@styled-icons/fluentui-system-regular';

/* Components */
import { ActionsTab } from 'components/storage/actions/actionTab/ActionsTab';

/* Hooks */
import { useAppDispatch } from 'store/store';

/* State management */
import { setCurrentItem, setCuttedItem } from 'store/table.slice';

/* Action */
import { downloadFile } from 'components/storage/actions/fileActions/downloadFile';
import { MoveFile } from 'components/storage/actions/fileActions/moveFile';

/* Enums */
import { StorageActionModals } from 'components/storage/modals/enums';

/* Constants */
import { textKeys } from 'utils/textKeys';

export const generateSharedActions = ({
  setIsShown,
  setModal,
  setItem,
  setItemName,
  cuttedItem,
  getItems,
  currentItem,
  toasts,
  setToasts,
}: SharedGenerateActionProps): EuiTableActionsColumnType<SharedItem> => {
  const dispatch = useAppDispatch();
  const folderType = 1;
  const fileType = 2;
  const accessType = 4;
  const controlType = 3;

  const generateActionsTab = [
    {
      available: ({ itemType, shareType }: SharedItem) => {
        return itemType == fileType && shareType == controlType ? true : false;
      },
      render: ({ itemId, name }: SharedItem) => {
        return (
          <ActionsTab
            hasLabel={true}
            icon={<TextEditStyle />}
            label={textKeys.rename_file_action}
            handleClick={() => {
              setIsShown(true);
              setItem(itemId);
              setModal(StorageActionModals.RenameFile);
              setItemName(name);
            }}
          />
        );
      },
    },
    {
      available: ({ itemType, shareType }: SharedItem) => {
        return itemType == folderType && shareType == controlType ? true : false;
      },
      render: ({ itemId, name }: SharedItem) => {
        return (
          <ActionsTab
            hasLabel={true}
            icon={<TextEditStyle />}
            label={textKeys.rename_folder_action}
            handleClick={() => {
              setIsShown(true);
              setItem(itemId);
              setModal(StorageActionModals.RenameFolder);
              setItemName(name);
            }}
          />
        );
      },
    },
    {
      available: ({ itemType, shareType }: SharedItem) => {
        return itemType == folderType && shareType == controlType ? true : false;
      },
      render: ({ itemId }: SharedItem) => {
        return (
          <ActionsTab
            hasLabel={true}
            icon={<FolderOpen />}
            label={textKeys.open_folder_action}
            handleClick={() => {
              dispatch(setCurrentItem(itemId));
            }}
          />
        );
      },
    },
    {
      available: ({ itemType, shareType }: SharedItem) => {
        return itemType == folderType && shareType == accessType ? true : false;
      },
      render: ({ itemId }: SharedItem) => {
        return (
          <ActionsTab
            hasLabel={true}
            icon={<FolderOpen />}
            label={textKeys.open_folder_action}
            handleClick={() => {
              dispatch(setCurrentItem(itemId));
            }}
          />
        );
      },
    },
    {
      available: ({ itemType, shareType }: SharedItem) => {
        return itemType == fileType && shareType == accessType ? true : false;
      },
      render: ({ itemId, name, extension }: SharedItem) => {
        return (
          <ActionsTab
            hasLabel={true}
            icon={<ArrowDownload />}
            label={textKeys.download_file_action}
            handleClick={() => {
              setItem(itemId);
              downloadFile({ fileId: itemId as string, name, extension, setToasts, toasts });
            }}
          />
        );
      },
    },
    {
      available: ({ itemType, shareType }: SharedItem) => {
        return itemType == folderType && shareType == controlType ? true : false;
      },
      render: ({ itemId, name, extension }: SharedItem) => {
        return (
          <ActionsTab
            hasLabel={true}
            icon={<ArrowDownload />}
            label={textKeys.download_file_action}
            handleClick={() => {
              setItem(itemId);
              downloadFile({ fileId: itemId as string, name, extension, setToasts, toasts });
            }}
          />
        );
      },
    },
    {
      available: ({ itemType, shareType }: SharedItem) => {
        return itemType == fileType && shareType == controlType ? true : false;
      },
      render: ({ itemId, name }: SharedItem) => {
        return (
          <ActionsTab
            hasLabel={true}
            icon={<Delete />}
            label={textKeys.delete_file_action}
            handleClick={() => {
              setIsShown(true);
              setItem(itemId);
              setModal(StorageActionModals.DeleteFile);
              setItemName(name);
            }}
          />
        );
      },
    },
  ];

  const generateCutPasteTabs = () => {
    return [
      {
        available: ({ itemType, shareType }: SharedItem) => {
          return itemType == fileType && cuttedItem == null && shareType == controlType
            ? true
            : false;
        },
        render: ({ itemId }: SharedItem) => {
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
        available: ({ itemType, shareType }: SharedItem) => {
          return itemType == folderType && cuttedItem != null && shareType == controlType
            ? true
            : false;
        },
        render: ({ itemId }: SharedItem) => {
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

  const actionsCutPaste = generateCutPasteTabs();

  return {
    name: textKeys.storage_column_label_actions,
    width: '90px',
    actions: [...generateActionsTab, ...actionsCutPaste],
  };
};
