/*Constants*/
import { textKeys } from './textKeys';

export enum ToastStyle {
  Success = 'success',
  Danger = 'danger',
}

export const Toasts = {
  moveFile: {
    success: {
      title: textKeys.move_file_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.move_file_problem,
      color: ToastStyle.Danger,
    },
  },
  downloadFile: {
    success: {
      title: textKeys.download_file_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.download_file_problem,
      color: ToastStyle.Danger,
    },
  },
  uploadFile: {
    success: {
      title: textKeys.upload_file_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.upload_file_problem,
      color: ToastStyle.Danger,
    },
  },
  renameFile: {
    success: {
      title: textKeys.rename_file_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.rename_file_problem,
      color: ToastStyle.Danger,
    },
  },
  deleteFile: {
    success: {
      title: textKeys.delete_file_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.delete_file_problem,
      color: ToastStyle.Danger,
    },
  },
  createFolder: {
    success: {
      title: textKeys.create_folder_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.create_folder_problem,
      color: ToastStyle.Danger,
    },
  },
  shareFolder: {
    success: {
      title: textKeys.share_folder_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.share_folder_problem,
      color: ToastStyle.Danger,
    },
  },
  inviteFolder: {
    success: {
      title: textKeys.invite_folder_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.invite_folder_problem,
      color: ToastStyle.Danger,
    },
  },
  renameFolder: {
    success: {
      title: textKeys.rename_folder_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.rename_folder_problem,
      color: ToastStyle.Danger,
    },
  },
  deleteFolder: {
    success: {
      title: textKeys.delete_folder_success,
      color: ToastStyle.Success,
    },
    error: {
      title: textKeys.delete_folder_problem,
      color: ToastStyle.Danger,
    },
  },
};
