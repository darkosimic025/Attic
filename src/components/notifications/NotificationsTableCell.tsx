import React, { useEffect, useState } from 'react';

/*Services*/
import { accountServices } from 'services/accountServices';

/*Helpers*/
import { base64Reader } from 'utils/helpers';

/*Images*/
import { defaultAvatar } from 'utils/images';

/*Styled components*/
import {
  NotificationsCellSenderName,
  NotificationsCellSenderPicture,
  NotificationsCellWrapper,
} from './Notifications.styled';
import { NotificationSender } from './types';

export const NotificationsCell = ({ firstName, lastName, pictureId }: NotificationSender) => {
  const [picture, setPicture] = useState<string | ArrayBuffer | undefined | null>('');

  const senderProfilePictureSetter = async ({ pictureId }: { pictureId: string | null }) => {
    if (pictureId != null) {
      await accountServices.getUserProfilePicture(pictureId).then((responseBuffer) => {
        base64Reader(responseBuffer, setPicture);
      });
    } else {
      return setPicture(process.env.PUBLIC_URL + defaultAvatar);
    }
  };

  useEffect(() => {
    senderProfilePictureSetter({ pictureId });
  }, []);

  return (
    <NotificationsCellWrapper>
      <NotificationsCellSenderPicture src={picture as string} />
      <NotificationsCellSenderName>{`${firstName} ${lastName}`}</NotificationsCellSenderName>
    </NotificationsCellWrapper>
  );
};
