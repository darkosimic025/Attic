/*Libraries*/
import axios from 'axios';

/*Constants*/
import { API_URL, BASE_URL } from 'utils/urlConstants';

const notificationsEndpoint = BASE_URL + API_URL.notifications;

const getNotifications = () => {
  return axios.get(notificationsEndpoint, {
    withCredentials: true,
  });
};

const readNotifications = () => {
  return axios.patch(
    notificationsEndpoint,
    {},
    {
      withCredentials: true,
    }
  );
};

const notificationsService = {
  getNotifications,
  readNotifications,
};

export default notificationsService;
