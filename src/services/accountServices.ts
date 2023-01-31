/*Librares*/
import axios from 'axios';

/*Types*/
import { PersonalInformationFiledsTypes } from 'components/personalInformation/types';
import { ChangePasswordTypes } from 'components/changePassword/types';

/*Constants*/
import { API_URL, PATHS, BASE_URL } from 'utils/urlConstants';

const updateUserPersonalInformationEndpoint =
  BASE_URL + API_URL.user + PATHS.updateIserPersonalInformation;

const profilePictureEndpoint = BASE_URL + API_URL.user + PATHS.profilePicture;

const updateChangePasswordEndpoint = BASE_URL + API_URL.user + PATHS.changePassword;

const updateUserPersonalInformation = (data: PersonalInformationFiledsTypes) => {
  return axios.post(updateUserPersonalInformationEndpoint, data, { withCredentials: true });
};

const updateUserProfilePicture = (data: FormData) => {
  return axios.post(profilePictureEndpoint, data, { withCredentials: true });
};

const getUserProfilePicture = (parametars: string | null) => {
  return axios.get(profilePictureEndpoint + parametars, {
    withCredentials: true,
    responseType: 'blob',
  });
};

const removeUserProfilePicture = () => {
  return axios.delete(profilePictureEndpoint, { withCredentials: true });
};

const updateChangePassword = (data: ChangePasswordTypes) => {
  return axios.post(updateChangePasswordEndpoint, data, { withCredentials: true });
};

export const accountServices = {
  updateUserPersonalInformation,
  updateUserProfilePicture,
  getUserProfilePicture,
  removeUserProfilePicture,
  updateChangePassword,
};
