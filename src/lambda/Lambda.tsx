import React, { useCallback, useState } from 'react';

/*EUI Components*/
import { EuiButton, EuiFlexGroup, EuiProvider, EuiSpacer } from '@elastic/eui';

/*Types*/
import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';

/*Components*/
import { Breadcrumbs } from 'components/breadcrumbs/Breadcrumbs';
import { Toast } from 'components/toast/Toast';
import { LambdaActions } from './LambdaActions';
import { LambdaCodeBlock } from './LambdaCodeBlock';
import { LambdaFilePicker } from './LambdaFilePicker';

/*Services*/
import lambdaService from 'services/lambdaServices';

/*Hooks*/
import { useAppDispatch } from 'store/store';

/*State management*/
import { setIsLoading } from 'store/table.slice';

/*Utils*/
import { Toasts } from 'utils/toastsLambda';

/*Enums*/
import { Actions } from './enums';
import { EUISizes } from 'theme/EuiEnums';

/*Styled components*/
import { LambdaLayout } from './Lamba.styled';


export const Lambda = () => {
  const dispatch = useAppDispatch();

  const [selectedValue, setSelectedValue] = useState<string>(Actions.UploadFile);
  const [pythonScriptCode, setPythonScriptCode] = useState<string | ArrayBuffer | null>();
  const [pythonFile, setPythonFile] = useState<File | null>(null);
  const [fileExtensionError, setFileExtensionError] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const breadcrumbs = [{ id: '', text: 'Lambda' }];

  const onSubmit = useCallback((data: File, actionType: number) => {
    const formData = new FormData();
    formData.append('file', data);
    dispatch(setIsLoading(true));
    lambdaService
      .postFunction({ actionType, data: formData })
      .then(() => {
        dispatch(setIsLoading(false));
        setToasts(toasts.concat(Toasts.lambda.success as ToastType));
      })
      .catch(() => {
        dispatch(setIsLoading(false));
        setToasts(toasts.concat(Toasts.lambda.error as ToastType));
      });
  }, []);

  const convertValueToActionParam = ({ selectedValue }: { selectedValue: string }) => {
    const triggerActions = {
      uploadFile: 1,
    };
    switch (selectedValue) {
      case Actions.UploadFile:
        return triggerActions.uploadFile;
    }
  };

  return (
    <>
      <Breadcrumbs crumbs={breadcrumbs}></Breadcrumbs>
      <LambdaLayout>
        <EuiProvider colorMode='light'>
          <EuiFlexGroup>
            <LambdaActions setSelectedValue={setSelectedValue} />
            <LambdaFilePicker
              setFileExtensionError={setFileExtensionError}
              setPythonScriptCode={setPythonScriptCode}
              setPythonFile={setPythonFile}
              fileExtensionError={fileExtensionError}
            />
          </EuiFlexGroup>
          <EuiSpacer size={EUISizes.XLarge} />
          <EuiSpacer size={EUISizes.XLarge} />
          <LambdaCodeBlock pythonScriptCode={pythonScriptCode} />
          <EuiSpacer size={EUISizes.XLarge} />
          <EuiButton
            disabled={(fileExtensionError || pythonFile == null) && true}
            iconType='play'
            size={EUISizes.Medium}
            fullWidth={true}
            fill
            onClick={() => {
              onSubmit(pythonFile as File, convertValueToActionParam({ selectedValue }) as number);
            }}
          >
            Run Python script
          </EuiButton>
        </EuiProvider>
      </LambdaLayout>
      <Toast toasts={toasts} setToasts={setToasts} />
    </>
  );
};
