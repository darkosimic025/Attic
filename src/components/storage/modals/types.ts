import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';
import { Dispatch, SetStateAction } from 'react';

export interface ModalsProps {
  item: string | null;
  itemName: string;
  modal: string | undefined;
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  currentItem: string | null;
  getItems: (id: string | null) => Promise<void | { payload: unknown[]; type: string }>;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}
