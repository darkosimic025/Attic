/*Constants*/
import { textKeys } from './textKeys';

export enum ToastStyle {
  Success = 'success',
  Danger = 'danger',
}

export const Toasts = {
  lambda: {
    success: {
      title: textKeys.lambda_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.lambda_problem,
      color: ToastStyle.Danger,
    },
  },
}