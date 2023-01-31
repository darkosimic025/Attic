/*Libraries*/
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*Services*/
import authService from 'services/authService';

/*Types*/
import { RegistrationFieldsTypes } from 'components/registration/types';
import { LoginFieldsTypes } from 'components/login/types';

/*Action types*/
import { SIGN_IN, SIGN_OUT, SIGN_UP, GET_USER_DATA } from './action_types';

export const signUp = createAsyncThunk(SIGN_UP, async (data: RegistrationFieldsTypes, thunkAPI) => {
  try {
    const response = await authService.register(data);
    const statusResponse = response.status;
    return statusResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data);
    } else {
      return thunkAPI.rejectWithValue(error);
    }
  }
});

export const signIn = createAsyncThunk(SIGN_IN, async (data: LoginFieldsTypes, thunkAPI) => {
  try {
    const userData = await authService.loginWithData(data);
    return userData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data);
    } else {
      return thunkAPI.rejectWithValue(error);
    }
  }
});

export const getUserData = createAsyncThunk(GET_USER_DATA, async (_, thunkAPI) => {
  try {
    const userData = await authService.loginWithCookie();
    return userData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data);
    } else {
      return thunkAPI.rejectWithValue(error);
    }
  }
});

export const signOut = createAsyncThunk(SIGN_OUT, async (data, thunkAPI) => {
  try {
    const response = await authService.logout(data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data);
    } else {
      return thunkAPI.rejectWithValue(error);
    }
  }
});
