/*Libraries*/
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*Action types*/
import {
  UPDATE_USER_DATA,
  UPDATE_USER_PROFILE_PICTURE,
  REMOVE_USER_PROFILE_PICTURE,
} from './action_types';

/*State management*/
import { accountServices } from 'services/accountServices';

/*Types*/
import { PersonalInformationFiledsTypes } from 'components/personalInformation/types';

export const updateUserPersonalInformation = createAsyncThunk(
  UPDATE_USER_DATA,
  async (data: PersonalInformationFiledsTypes, thunkAPI) => {
    try {
      const response = await accountServices.updateUserPersonalInformation(data);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data);
      } else {
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);

export const updateUserProfilePicture = createAsyncThunk(
  UPDATE_USER_PROFILE_PICTURE,
  async (data: FormData, thunkAPI) => {
    try {
      const response = await accountServices.updateUserProfilePicture(data);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error);
      } else {
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);

export const removeUserProfilePicture = createAsyncThunk(REMOVE_USER_PROFILE_PICTURE, async () => {
  try {
    const response = await accountServices.removeUserProfilePicture();
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    } else {
      return error;
    }
  }
});
