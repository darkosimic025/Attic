import React from 'react';

/*Icons*/
import { Document, Folder } from '@styled-icons/fluentui-system-regular';

/*Types*/
import { EuiBasicTableColumn } from '@elastic/eui';
import { StorageItem } from './types';

/*Constants*/
import { textKeys } from 'utils/textKeys';

/*Helpers*/
import { convertDate, convertSizeOfFile } from 'utils/helpers';

export const generateColumns = (): EuiBasicTableColumn<StorageItem>[] => [
  {
    field: textKeys.storage_column_name_icon,
    name: '',
    itemType: 'icon',
    render: (extension: StorageItem['extension']) => {
      if (extension == null) {
        return <Folder size={'20px'} />;
      } else {
        return <Document size={'20px'} />;
      }
    },

    width: '3%',
  },
  {
    field: textKeys.storage_column_name_name,
    name: textKeys.storage_column_label_name,
    sortable: true,
    truncateText: true,
    width: '57%',
  },

  {
    field: textKeys.storage_column_name_type,
    name: textKeys.storage_column_label_type,
    render: (extension: StorageItem['extension']) => {
      if (extension) {
        return <span>{extension.substring(1).toUpperCase()}</span>;
      }
    },
    truncateText: true,
  },
  {
    field: textKeys.storage_column_name_size,
    name: textKeys.storage_column_label_size,
    render: (size: StorageItem['size']) => {
      return convertSizeOfFile(size);
    },
    truncateText: true,
    sortable: true,
  },
  {
    field: textKeys.storage_column_name_date_created,
    name: textKeys.storage_column_label_date_created,
    dataType: 'date',
    render: (date: StorageItem['dateCreated']) => {
      return convertDate(date);
    },
    textOnly: true,
    align: 'right',
    sortable: true,
  },
  {
    field: textKeys.storage_column_name_date_modified,
    name: textKeys.storage_column_label_date_modified,
    dataType: 'date',
    render: (date: StorageItem['dateCreated']) => {
      return convertDate(date);
    },
    textOnly: true,
    align: 'right',
    sortable: true,
  },
];
