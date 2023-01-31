import { NotificationsTable } from 'components/notifications/NotificationsTable';
import { NotificationsPage } from 'components/notifications/Notifications.styled';
import React from 'react';

export const Notifications = () => {
  return (
    <NotificationsPage>
      <NotificationsTable />
    </NotificationsPage>
  );
};
