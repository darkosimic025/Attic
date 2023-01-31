import React, { ChangeEvent, useCallback, useRef } from 'react';

/*Hooks*/
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store/store';

/*Services*/
import fileService from 'services/fileServices';

/*State management*/
import { setIsLoading } from 'store/table.slice';

/*EUI Components*/
import { EuiButton, EuiFlexItem } from '@elastic/eui';

/*Styled components*/
import { UploadFileInput } from './uploadFile.styled';

/*Types*/
import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { Toasts } from 'utils/toastsFileFolders';

export const UploadFile = ({
  getItems,
  toasts,
  setToasts,
}: {
  getItems: (id: string | null) => Promise<void | { payload: unknown[]; type: string }>;
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}) => {
  const folderId = useSelector<RootState, string | null>((state) => state.table.currentItem);

  const dispatch = useAppDispatch();
  const inputFile = useRef<HTMLInputElement>(null);
  const handleInputFileClick = useCallback(() => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  }, []);
  const handleUploadFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>, folderId: string | null) => {
      const eventTarget = event.target;
      onSubmit(eventTarget.files as FileList, folderId);
      eventTarget.value = '';
    },
    []
  );

  const onSubmit = useCallback((data: FileList, folderId: string | null) => {
    const formData = new FormData();
    formData.append('file', data[0]);
    dispatch(setIsLoading(true));
    fileService
      .postFile({ folderId, data: formData })
      .then(() => {
        dispatch(setIsLoading(false));
        getItems(folderId);
        setToasts(toasts.concat(Toasts.uploadFile.success as ToastType));
      })
      .catch(() => {
        dispatch(setIsLoading(false));
        setToasts(toasts.concat(Toasts.uploadFile.error as ToastType));
      });
  }, []);

  return (
    <>
      <EuiFlexItem>
        <EuiButton size='s' iconType='share' onClick={handleInputFileClick}>
          {textKeys.upload_file_button}
        </EuiButton>
      </EuiFlexItem>
      <UploadFileInput
        onChange={(event) => handleUploadFile(event, folderId)}
        type={'file'}
        ref={inputFile}
      />
    </>
  );
};
