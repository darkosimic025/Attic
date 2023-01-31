import React from 'react';
import './style.css';

/*EUI Components*/
import { EuiGlobalToastList } from '@elastic/eui';

/*Types*/
import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';
import { ToastListProps } from './types';

export const Toast = ({ toasts, setToasts, side }: ToastListProps) => {
  const removeToast = (removedToast: ToastType) => {
    setToasts(toasts.filter((toast: ToastType) => toast.text !== removedToast.text));
  };

  return (
    <EuiGlobalToastList
      className='toastComponentWidth'
      toasts={toasts as ToastType[]}
      dismissToast={removeToast}
      toastLifeTimeMs={8000}
      //Here i need to leave ANY because of EUI missing type for ToastSide
      side={side as any}
    />
  );
};
