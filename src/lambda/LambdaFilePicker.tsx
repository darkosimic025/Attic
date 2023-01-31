import React, { useCallback } from 'react';

/*EUI Components*/
import { EuiFilePicker, EuiFlexItem, EuiFormRow } from '@elastic/eui';

/*Types*/
import { LambdaFilePickerProps } from './types';

/*Constants*/
import { textKeys } from 'utils/textKeys';

export const LambdaFilePicker = ({
  setFileExtensionError,
  setPythonScriptCode,
  setPythonFile,
  fileExtensionError,
}: LambdaFilePickerProps) => {
  const handleUploadFile = useCallback((file: File) => {
    const extensionRegEx = /\.[0-9a-z]+$/i;
    if (file.name.match(extensionRegEx)![0] !== '.py') {
      setFileExtensionError(true);
      setPythonScriptCode(textKeys.lambda_code_block_invalid_file);
    } else {
      setFileExtensionError(false);
      setPythonFile(file);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const code = e.target && e.target.result;
        setPythonScriptCode(code);
      };
      reader.readAsText(file);
    }
  }, []);

  return (
    <EuiFlexItem>
      <EuiFormRow label={textKeys.lambda_label} fullWidth={true}>
        <EuiFilePicker
          accept={textKeys.lambda_file_picker_accept_extension}
          isInvalid={fileExtensionError}
          fullWidth={true}
          initialPromptText={textKeys.lambda_file_picker_description}
          onChange={(file) => file && handleUploadFile(file[0] as File)}
          display='default'
        />
      </EuiFormRow>
    </EuiFlexItem>
  );
};
