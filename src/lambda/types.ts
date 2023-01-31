import { Dispatch, SetStateAction } from 'react';

export interface LambdaFilePickerProps {
  setFileExtensionError: Dispatch<SetStateAction<boolean>>;
  setPythonScriptCode: Dispatch<SetStateAction<string | ArrayBuffer | null | undefined>>;
  setPythonFile: Dispatch<SetStateAction<File | null>>;
  fileExtensionError: boolean;
}

export interface LambdaCodeBlockProps {
  pythonScriptCode: string | ArrayBuffer | null | undefined;
}

export interface LambdaActionsProps {
  setSelectedValue: Dispatch<SetStateAction<string>>;
}
