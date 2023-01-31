/*Services*/
import fileService from 'services/fileServices';

/*Types*/
import { MoveFileProps } from './types';
import { Toast } from '@elastic/eui/src/components/toast/global_toast_list';

/*Constants*/
import { Toasts } from 'utils/toastsFileFolders';

export const MoveFile = async ({
  cuttedItem,
  newFolder,
  getItems,
  currentItem,
  toasts,
  setToasts,
}: MoveFileProps) => {
  return fileService
    .moveFile({ fileId: cuttedItem as string, newFolder: newFolder })
    .then(() => {
      getItems(currentItem);
      setToasts(toasts.concat(Toasts.moveFile.success as Toast));
    })
    .catch(() => {
      setToasts(toasts.concat(Toasts.moveFile.error as Toast));
    });
};
