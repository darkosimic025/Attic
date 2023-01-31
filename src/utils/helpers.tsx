import React from 'react';

/*Types*/
import { FieldError } from 'react-hook-form';
import { AxiosResponse } from 'axios';
import { StorageItem } from 'components/storage/personalStorage/types';
import { ListTableSortDirection } from 'components/table/types';

export type InputFieldsName =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'country'
  | 'address'
  | 'name'
  | 'newName'
  | 'invitedUserEmail';

export const checkErrorInputField = (
  errors: {
    firstName?: FieldError | undefined;
    lastName?: FieldError | undefined;
    email?: FieldError | undefined;
    password?: FieldError | undefined;
    country?: FieldError | undefined;
    address?: FieldError | undefined;
    termsAndConditions?: FieldError | undefined;
    confirmPassword?: FieldError | undefined;
    name?: FieldError | undefined;
    newName?: FieldError | undefined;
    invitedUserEmail?: FieldError | undefined;
  },
  name: InputFieldsName
): boolean => {
  return errors[name] ? true : false;
};

export const base64Reader = (
  responseBuffer: AxiosResponse<Blob>,
  callbackFunction: (value: React.SetStateAction<string | ArrayBuffer | null | undefined>) => void
) => {
  const fileReader = new window.FileReader();
  fileReader.readAsDataURL(responseBuffer.data);

  fileReader.onload = () => callbackFunction(fileReader.result);
};

export const convertSizeOfFile = (size: number | null) => {
  const MB = 1;
  const GB = 1000;
  const fixedSize = 2;
  if (size) {
    if (size < MB) {
      const trimedSize = (size * GB).toFixed(fixedSize);
      return <span>{trimedSize + ' KB'}</span>;
    } else if (size > MB && size < GB) {
      const trimedSize = size.toFixed(fixedSize);
      return <span>{trimedSize + ' MB'}</span>;
    } else if (size > GB && size < 10 * GB) {
      const trimedSize = (size / GB).toFixed(fixedSize);
      return <span>{trimedSize + ' GB'}</span>;
    }
  }
};

export const convertDate = (date: string) => {
  const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' } as const;
  const timeOptions = { hour: 'numeric', minute: 'numeric' } as const;
  const changeDateFormat = new Date(date);
  const currentDate = new Date();
  if (currentDate.toDateString() != changeDateFormat.toDateString()) {
    return <span>{changeDateFormat.toLocaleDateString('sr-RS', dateOptions)}</span>;
  } else {
    return <span>{changeDateFormat.toLocaleTimeString('sr-RS', timeOptions)}</span>;
  }
};

export const convertDirection = (sortDirection: ListTableSortDirection) => {
  return sortDirection == 'asc' ? 1 : 2;
};

export const convertSortingField = (sortField: keyof StorageItem) => {
  switch (sortField) {
    case 'name':
      return 1;
    case 'size':
      return 2;
    case 'dateCreated':
      return 3;
    case 'dateModified':
      return 4;
  }
};

export const convertMBtoGB = ({
  usedSpace,
  freeSpace,
}: {
  usedSpace: number;
  freeSpace: number;
}) => {
  const MB = 1000;
  const usedSpaceGB = parseFloat((usedSpace / MB).toFixed(2));
  const freeSpaceGB = parseFloat((freeSpace / MB).toFixed(2));
  return [freeSpaceGB, usedSpaceGB];
};
