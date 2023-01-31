/*Libraries*/
import { createSlice } from '@reduxjs/toolkit';

/*Types*/
import { NotificationSender, NotificationsItem } from 'components/notifications/types';

/*Actions*/
import { getNotifications } from './notifications.actions';

export interface NotificationsTypes {
  notificationsLambda: any;
  notificationsArray: NotificationsItem[];
  newNotification: NotificationSender & { message: string };
  numberOfNotifications: number;
}

export const initialState: NotificationsTypes = {
  notificationsLambda: {
    isSettedLambdaNotification: false,
    pythonOutput: '',
  },
  notificationsArray: [],
  newNotification: {
    isSetted: false,
    message: '',
    id: '',
    firstName: '',
    email: '',
    lastName: '',
    pictureId: '',
  },
  numberOfNotifications: 0,
};

export const notificationsSlice = createSlice({
  name: 'Notifications',
  initialState,
  reducers: {
    onLambdaNotification: (state, { payload }) => {
      state.notificationsLambda.isSettedLambdaNotification = true;
      state.notificationsLambda.pythonOutput = payload;
    },
    onNotification: ({ newNotification }, { payload }) => {
      newNotification.isSetted = true;
      newNotification.message = payload.message;
      newNotification.id = payload.sender.id;
      newNotification.email = payload.sender.email;
      newNotification.firstName = payload.sender.firstName;
      newNotification.lastName = payload.sender.lastName;
      newNotification.pictureId = payload.sender.pictureId;
    },
    clearNotification: ({ newNotification, notificationsLambda }) => {
      notificationsLambda.isSettedLambdaNotification = false;
      notificationsLambda.pythonOutput = '';
      newNotification.isSetted = false;
      newNotification.message = '';
      newNotification.id = '';
      newNotification.email = '';
      newNotification.firstName = '';
      newNotification.lastName = '';
      newNotification.pictureId = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNotifications.fulfilled, (state, { payload }) => {
      state.numberOfNotifications = payload.data.numberOfUnreadNotifications;
      state.notificationsArray.push(payload.data.notificationList);
    });
  },
});

export const { onNotification, clearNotification, onLambdaNotification } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
