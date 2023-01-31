import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';
import { Dispatch, SetStateAction } from 'react';

export interface CreateFolderProps {
  getItems: (id: string | null) => Promise<void | { payload: unknown[]; type: string }>;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}
export interface CreateFolderFormProps {
  name: string;
  parentId: string | null;
}

export interface RenameProps {
  id: string | null;
  newName: string;
}

export interface ShareInviteProps {
  folderId: string | null;
  invitedUserEmail: string;
}

export interface ShareInviteFolderModalProps {
  item: string | null;
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}

export interface renameFolderModalProps {
  item: string | null;
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  getItems: (id: string | null) => Promise<void | { payload: unknown[]; type: string }>;
  currentItem: string | null;
  itemName: string | undefined;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}

export interface DeleteFolderProps {
  item: string;
  itemName: string;
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  currentItem: string | null;
  getItems: (id: string | null) => Promise<void | { payload: unknown[]; type: string }>;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}
