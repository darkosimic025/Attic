/*Libraries*/
import axios from 'axios';

/*Constants*/
import { API_URL, PATHS, BASE_URL } from 'utils/urlConstants';

/*Types*/
import { RegistrationFieldsTypes } from 'components/registration/types';
import { LoginFieldsTypes as LoginFieldsTypes } from 'components/login/types';

const registrationEndpoint = BASE_URL + API_URL.user + PATHS.register;
const loginWithDataEndpoint = BASE_URL + API_URL.user + PATHS.login;
const loginWithCookieEndpoint = BASE_URL + API_URL.user + PATHS.getUser;
const logoutEndpoint = BASE_URL + API_URL.user + PATHS.logout;

const register = (data: RegistrationFieldsTypes) => {
  return axios.post(registrationEndpoint, data);
};

const loginWithData = (data: LoginFieldsTypes) => {
  return axios.post(loginWithDataEndpoint, data, { withCredentials: true });
};

const loginWithCookie = () => {
  return axios.get(loginWithCookieEndpoint, { withCredentials: true });
};

const logout = (data: any) => {
  return axios.post(logoutEndpoint, data, { withCredentials: true });
};

const authService = {
  register,
  loginWithData,
  loginWithCookie,
  logout,
};

export default authService;
