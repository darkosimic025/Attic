import React, { useEffect, useState } from 'react';

/*Services*/
import { accountServices } from 'services/accountServices';

/*Helpers*/
import { base64Reader } from 'utils/helpers';

/*Images*/
import { defaultAvatar } from 'utils/images';

/*Styled components*/
import {
  NotificationContent,
  NotificationsSenderPicture,
  NotificationsToastContent,
} from './Notifications.styled';

/*Types*/
import { NotificationSender } from './types';

export const StyledToastContent = ({
  pictureId,
  firstName,
  lastName,
  message,
}: Omit<NotificationSender, 'id' | 'email' | 'isSetted'>) => {
  const [picture, setPicture] = useState<string | ArrayBuffer | undefined | null>(null);
  useEffect(() => {
    notificationSenderPicutreSetter({ pictureId });
  }, []);

  const notificationSenderPicutreSetter = ({ pictureId }: { pictureId: string | null }) => {
    if (pictureId != null) {
      accountServices.getUserProfilePicture(pictureId).then((responseBuffer) => {
        base64Reader(responseBuffer, setPicture);
      });
    } else {
      setPicture(process.env.PUBLIC_URL + defaultAvatar);
    }
  };

  return (
    <NotificationsToastContent>
      <NotificationsSenderPicture src={picture as string} />
      <NotificationContent>{`${firstName} ${lastName} : ${message}`}</NotificationContent>
    </NotificationsToastContent>
  );
};
