/*Libraries*/
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*Services*/
import notificationsService from 'services/notificationServices';

/*Action types*/
import { GET_NUMBER_NOTIFICATIONS, READ_NOTIFICATIONS } from './action_types';

export const getNotifications = createAsyncThunk(GET_NUMBER_NOTIFICATIONS, async (_, thunkAPI) => {
  try {
    const response = await notificationsService.getNotifications();
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data);
    } else {
      return thunkAPI.rejectWithValue(error);
    }
  }
});

export const readNotifications = createAsyncThunk(READ_NOTIFICATIONS, async (_, thunkAPI) => {
  try {
    const response = await notificationsService.readNotifications();
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data);
    } else {
      return thunkAPI.rejectWithValue(error);
    }
  }
});
