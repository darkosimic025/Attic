export interface NotificationsItem {
  message: string;
  dateCreation: string;
  isRead: boolean;
  sender: NotificationSender;
}

export interface NotificationSender {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  pictureId: string | null;
  message: string;
  isSetted: boolean;
}
