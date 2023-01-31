/*Constants*/
import { textKeys } from './textKeys';

export enum ToastStyle {
  Success = 'success',
  Danger = 'danger',
}

export const Toasts = {
  restoreItem: {
    success: {
      title: textKeys.restore_item_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.restore_item_problem,
      color: ToastStyle.Danger,
    },
  },
};
