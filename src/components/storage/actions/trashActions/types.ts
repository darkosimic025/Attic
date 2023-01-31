import { Toast } from '@elastic/eui/src/components/toast/global_toast_list';
import { Dispatch, SetStateAction } from 'react';

export interface RestoreItemProps {
  item: string;
  itemName: string;
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  currentItem: string | null;
  getItems: (id: string | null) => Promise<void | { payload: unknown[]; type: string }>;
  toasts: Toast[];
  setToasts: React.Dispatch<React.SetStateAction<Toast[]>>;
}
