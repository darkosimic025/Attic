import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';
import { Dispatch, SetStateAction } from 'react';

export interface StorageItem {
  itemId: string | null;
  itemType: number;
  dateCreated: string;
  dateModified: string;
  name: string;
  size: number | null;
  extension: string | null;
}

export interface ActionTabGeneratorProps {
  label: string;
  icon: JSX.Element;
  handleClick: ({ itemId, name, extension }: StorageItem) => void;
  item: number;
}

export interface GenerateActionsProps {
  setIsShown: Dispatch<SetStateAction<boolean>>;
  setItem: Dispatch<SetStateAction<StorageItem['itemId']>>;
  setModal: Dispatch<SetStateAction<string | undefined>>;
  setItemName: Dispatch<SetStateAction<StorageItem['name']>>;
  cuttedItem: string | null;
  getItems: (id: string | null) => Promise<void | { payload: StorageItem[]; type: string }>;
  currentItem: StorageItem['itemId'];
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}
