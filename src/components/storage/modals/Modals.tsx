import React from 'react';

/*Actions*/
import { DeleteFile } from '../actions/fileActions/deleteFile';
import { RenameFile } from '../actions/fileActions/renameFile';
import { DeleteFolder } from '../actions/folderActions/deleteFolder';
import { InviteFolder } from '../actions/folderActions/inviteFolder';
import { RenameFolder } from '../actions/folderActions/renameFolder';
import { ShareFolder } from '../actions/folderActions/shareFolder';
import { RestoreItem } from '../actions/trashActions/restoreItem';

/*Enums*/
import { StorageActionModals } from './enums';

/*Types*/
import { ModalsProps } from './types';

export const generateModals = ({
  item,
  itemName,
  modal,
  isShown,
  setIsShown,
  currentItem,
  getItems,
  setToasts,
  toasts,
}: ModalsProps) => {
  if (isShown) {
    switch (modal) {
      case StorageActionModals.RenameFolder:
        return (
          <RenameFolder
            currentItem={currentItem}
            getItems={getItems}
            itemName={itemName}
            isShown={isShown}
            item={item}
            setIsShown={setIsShown}
            setToasts={setToasts}
            toasts={toasts}
          />
        );

      case StorageActionModals.DeleteFolder:
        return (
          <DeleteFolder
            itemName={itemName}
            isShown={isShown}
            item={item as string}
            setIsShown={setIsShown}
            currentItem={currentItem}
            getItems={getItems}
            setToasts={setToasts}
            toasts={toasts}
          />
        );

      case StorageActionModals.DeleteFile:
        return (
          <DeleteFile
            itemName={itemName}
            isShown={isShown}
            setIsShown={setIsShown}
            setToasts={setToasts}
            toasts={toasts}
            item={item as string}
            currentItem={currentItem}
            getItems={getItems}
          />
        );

      case StorageActionModals.RenameFile:
        return (
          <RenameFile
            currentItem={currentItem}
            getItems={getItems}
            itemName={itemName}
            isShown={isShown}
            item={item as string}
            setIsShown={setIsShown}
            setToasts={setToasts}
            toasts={toasts}
          />
        );

      case StorageActionModals.ShareFolder:
        return (
          <ShareFolder
            isShown={isShown}
            item={item}
            setIsShown={setIsShown}
            setToasts={setToasts}
            toasts={toasts}
          />
        );

      case StorageActionModals.InviteFolder:
        return (
          <InviteFolder
            isShown={isShown}
            item={item}
            setIsShown={setIsShown}
            setToasts={setToasts}
            toasts={toasts}
          />
        );
      case StorageActionModals.RestoreItem:
        return (
          <RestoreItem
            itemName={itemName}
            isShown={isShown}
            setIsShown={setIsShown}
            setToasts={setToasts}
            toasts={toasts}
            item={item as string}
            currentItem={currentItem}
            getItems={getItems}
          />
        );
    }
  }
};
