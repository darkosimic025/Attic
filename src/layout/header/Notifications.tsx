import React, { useEffect } from 'react';

/*Hooks*/
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/*Actions*/
import { getNotifications } from 'store/notifications.actions';

/*Types*/
import { RootState, useAppDispatch } from 'store/store';

/*Styled components*/
import {
  NotificationsIcon,
  NotificationsIconNumber,
  NotificationsWrapper,
} from './Notifications.styled';

/*Constants*/
import { paths } from 'paths/paths';

export const Notifications = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  const numberOfNotifications = useSelector<RootState, number>(
    (state) => state.notifications.numberOfNotifications
  );
  return (
    <NotificationsWrapper onClick={() => navigate(paths.NOTIFICATIONS)}>
      <NotificationsIcon />
      {numberOfNotifications > 0 && (
        <NotificationsIconNumber>
          {numberOfNotifications > 9 ? '+9' : numberOfNotifications}
        </NotificationsIconNumber>
      )}
    </NotificationsWrapper>
  );
};
