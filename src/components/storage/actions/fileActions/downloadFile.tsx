/*Services*/

import fileService from 'services/fileServices';

/*Types*/
import { DownloadFileProps } from './types';
import { Toast } from '@elastic/eui/src/components/toast/global_toast_list';

/*Constants*/
import { Toasts } from 'utils/toastsFileFolders';

export const downloadFile = async ({
  fileId,
  name,
  extension,
  setToasts,
  toasts,
}: DownloadFileProps) => {
  return fileService
    .getFile({ fileId })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', name + extension);
      document.body.appendChild(link);
      link.click();
      setToasts(toasts.concat(Toasts.downloadFile.success as Toast));
    })
    .catch(() => {
      setToasts(toasts.concat(Toasts.downloadFile.error as Toast));
    });
};
