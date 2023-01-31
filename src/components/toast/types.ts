import { Dispatch, SetStateAction } from 'react';

/*Types*/
import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';

export interface ToastProps {
  id: string;
  title: string;
  color: string;
}

export interface ToastListProps {
  toasts: ToastType[];
  setToasts: Dispatch<SetStateAction<ToastType[]>>;
  side?: string;
}
