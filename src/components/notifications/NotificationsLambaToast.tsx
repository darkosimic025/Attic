import React, { useEffect, useState } from 'react';

/*Providers*/
import { EuiProvider } from '@elastic/eui';

/*Components*/
import { Toast } from 'components/toast/Toast';

/*Hooks*/
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/store';

/*Actions*/
import { clearNotification } from 'store/notifications.slice';

/*Types*/
import { RootState } from 'store/store';
import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';

/*Constants*/
import { textKeys } from 'utils/textKeys';

/*Enums*/
import { EUIColors } from 'theme/EuiEnums';

export const NotificationsLambdaToast = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const { isSettedLambdaNotification, pythonOutput } = useSelector<RootState, any>(
    (state) => state.notifications.notificationsLambda
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSettedLambdaNotification) {
      generateLambdaNotificationToast();
      setTimeout(() => dispatch(clearNotification()), 4000);
    }
  }, [pythonOutput]);

  const generateLambdaNotificationToast = () => {
    setToasts(
      toasts.concat({
        id: textKeys.lambda_id,
        color: EUIColors.Primary,
        title: textKeys.lambda_header,
        text: pythonOutput,
      } as ToastType)
    );
  };

  return (
    <EuiProvider colorMode='light'>
      <Toast toasts={toasts} setToasts={setToasts} side={'left'} />
    </EuiProvider>
  );
};
