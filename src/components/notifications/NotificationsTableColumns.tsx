import React from 'react';

/*Icons*/
import { Mail, MailRead } from '@styled-icons/fluentui-system-regular';

/*Types*/
import { EuiBasicTableColumn } from '@elastic/eui';
import { NotificationSender, NotificationsItem } from './types';

/*Constants*/
import { textKeys } from 'utils/textKeys';

/*Helpers*/
import { convertDate } from 'utils/helpers';

/*Components*/
import { NotificationsCell } from './NotificationsTableCell';
import { theme } from 'theme/ThemeProvider';

export const generateColumns = (): EuiBasicTableColumn<NotificationsItem>[] => [
  {
    field: textKeys.notifications_column_name_user,
    name: textKeys.notifications_column_label_user,
    render: ({
      firstName,
      lastName,
      pictureId,
      id,
      email,
      message,
      isSetted,
    }: NotificationSender) => {
      return (
        <NotificationsCell
          email={email}
          message={message}
          isSetted={isSetted}
          id={id}
          pictureId={pictureId}
          firstName={firstName}
          lastName={lastName}
        />
      );
    },
  },
  {
    field: textKeys.notifications_column_name_notification,
    name: textKeys.notifications_column_label_notification,
    width: '74%',
  },
  {
    field: textKeys.notifications_column_name_date,
    name: textKeys.notifications_column_label_date,
    dataType: 'date',
    render: (date: NotificationsItem['dateCreation']) => {
      return convertDate(date);
    },
    width: '9%',
  },
  {
    field: textKeys.notifications_column_name_isRead,
    name: textKeys.notifications_column_label_isRead,
    render: (isRead: NotificationsItem['isRead']) => {
      if (isRead) {
        return <MailRead size={'20px'} />;
      } else {
        return <Mail color={theme.colors.notifications.isNotReadIcon} size={'20px'} />;
      }
    },
    width: '3%',
    align: 'right',
  },
];
