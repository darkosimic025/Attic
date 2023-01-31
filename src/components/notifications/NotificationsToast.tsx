import React, { useEffect, useState } from 'react';

/*Providers*/
import { EuiProvider } from '@elastic/eui';

/*Components*/
import { Toast } from 'components/toast/Toast';

/*Styled components*/
import { StyledToastContent } from './NotificationsToastItem';

/*Hooks*/
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/store';

/*Actions*/
import { clearNotification } from 'store/notifications.slice';

/*Types*/
import { RootState } from 'store/store';
import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';
import { NotificationSender } from './types';

/*Constants*/
import { textKeys } from 'utils/textKeys';

/*Enums*/
import { EUIColors, EUIIcons } from 'theme/EuiEnums';

export const NotificationsToast = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const notificationToast = useSelector<RootState, NotificationSender>(
    (state) => state.notifications.newNotification
  );
  const firstNameOfUser = useSelector<RootState, string>((state) => state.user.firstName);

  const { firstName, lastName, pictureId, message, isSetted } = notificationToast;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSetted) {
      generateNotificationToast();
      setTimeout(() => dispatch(clearNotification()), 4000);
    }
  }, [notificationToast]);

  const generateNotificationToast = () => {
    setToasts(
      toasts.concat({
        iconType: EUIIcons.Bell,
        color: EUIColors.Primary,
        title: firstNameOfUser + textKeys.notifications_toast_message,
        text: (
          <StyledToastContent
            pictureId={pictureId}
            firstName={firstName}
            lastName={lastName}
            message={message}
          />
        ),
      } as ToastType)
    );
  };

  return (
    <EuiProvider colorMode='light'>
      <Toast toasts={toasts} setToasts={setToasts} side={'right'} />
    </EuiProvider>
  );
};
