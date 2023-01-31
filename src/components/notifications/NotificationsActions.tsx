import React from 'react';

/*EUI Components*/
import { EuiButton, EuiFlexItem } from '@elastic/eui';

/*Hooks*/
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/store';

/*Services*/
import notificationsService from 'services/notificationServices';

/*Store*/
import { getNotifications } from 'store/notifications.actions';

/*Types*/
import { RootState } from 'store/store';
import { textKeys } from 'utils/textKeys';
import { EUIColors, EUIIcons, EUISizes } from 'theme/EuiEnums';

export const NotificationsActions = ({ getItems }: { getItems: () => Promise<void> }) => {
  const dispatch = useAppDispatch();
  const numberOfNotifications = useSelector<RootState, number>(
    (state) => state.notifications.numberOfNotifications
  );
  const markAllAsRead = () => {
    notificationsService.readNotifications().then(() => {
      getItems();
      dispatch(getNotifications());
    });
  };

  return (
    <EuiFlexItem>
      <EuiButton
        size= {EUISizes.Small}
        disabled={numberOfNotifications > 0 ? false : true}
        color={EUIColors.Danger}
        iconType={EUIIcons.Check}
        onClick={markAllAsRead}
      >
        {textKeys.notifications_button_read_all}
      </EuiButton>
    </EuiFlexItem>
  );
};
