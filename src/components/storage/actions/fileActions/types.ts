import { Dispatch, SetStateAction } from 'react';

/*Types*/
import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';

export interface RenameFileProps {
  item: string;
  itemName: string;
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  currentItem: string | null;
  getItems: (id: string | null) => Promise<void | { payload: unknown[]; type: string }>;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}

export interface DownloadFileProps {
  fileId: string;
  name: string;
  extension: string | null;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}

export interface DeleteFileProps {
  item: string;
  itemName: string;
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
  currentItem: string | null;
  getItems: (id: string | null) => Promise<void | { payload: unknown[]; type: string }>;
}

export interface MoveFileProps {
  cuttedItem: string | null;
  newFolder: string;
  getItems: (id: string | null) => Promise<void | { payload: unknown[] }>;
  currentItem: string | null;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}
