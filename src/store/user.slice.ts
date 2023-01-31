/*Libraries*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

/*Constants*/
import { User } from './slices';

/*Types*/
import { UserData } from './types';

/*Actions*/
import { getUserData, signIn, signOut, signUp } from './user.actions';

import {
  updateUserPersonalInformation,
  removeUserProfilePicture,
  updateUserProfilePicture,
} from './account.actions';

const initialState: UserData = {
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  address: '',
  isLoggedIn: false,
  pictureId: null,
  usedSpace: 0,
  freeSpace: 0,
};

const userSlice = createSlice({
  name: User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state) => {
      state.isLoggedIn = false;
    }),
      builder.addCase(signUp.rejected, (state) => {
        state.isLoggedIn = false;
      });
    builder.addCase(
      getUserData.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<UserData>>) => {
        state.firstName = payload.data.firstName;
        state.lastName = payload.data.lastName;
        state.email = payload.data.email;
        state.country = payload.data.country;
        state.address = payload.data.address;
        state.isLoggedIn = true;
        state.pictureId = payload.data.pictureId;
        state.usedSpace = payload.data.usedSpace;
        state.freeSpace = payload.data.freeSpace;
      }
    );
    builder.addCase(signIn.rejected, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.country = '';
      state.address = '';
      state.isLoggedIn = false;
      state.pictureId = null;
      state.usedSpace = 0;
      state.usedSpace = 0;
    });
    builder.addCase(updateUserPersonalInformation.fulfilled, (state, { meta }) => {
      state.firstName = meta.arg.firstName;
      state.lastName = meta.arg.lastName;
      state.country = meta.arg.country;
      state.address = meta.arg.address;
    });
    builder.addCase(
      updateUserProfilePicture.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse>) => {
        state.pictureId = payload.data;
      }
    );
    builder.addCase(removeUserProfilePicture.fulfilled, (state) => {
      state.pictureId = null;
    });
  },
});

export default userSlice.reducer;
