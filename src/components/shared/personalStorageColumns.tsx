import React from 'react';

/* Icons */
import { Document, Folder } from '@styled-icons/fluentui-system-regular';

/* Types */
import { EuiBasicTableColumn, EuiBadge } from '@elastic/eui';
import { StorageItem } from 'components/storage/personalStorage/types';

/* Constants */
import { textKeys } from 'utils/textKeys';

/* Helpers */
import { convertDate, convertSizeOfFile } from 'utils/helpers';
import { SharedItem } from './types';

export const generateColumns = (): EuiBasicTableColumn<StorageItem>[] => [
  {
    field: textKeys.storage_column_label_icon,
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
    field: textKeys.shared_column_name_shared_type,
    name: textKeys.shared_column_label_shared_type,
    render: (controlType: SharedItem['shareType']) => {
      if (controlType) {
        return <EuiBadge color='default'>Control</EuiBadge>;
      } else {
        return <EuiBadge color='primary'>Access</EuiBadge>;
      }
    },
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
