/*Libraries*/
import axios from 'axios';

/*Constants*/
import { API_URL, PATHS, BASE_URL } from 'utils/urlConstants';

const lambdaEndpoint = BASE_URL + API_URL.runtime;

const postFunction = ({ actionType, data }: { actionType: number | null; data: FormData }) => {
    return axios.post(lambdaEndpoint, data, { withCredentials: true, params: { actionType: 1} });
};
  
const lambdaService = {
    postFunction
  };
  
  export default lambdaService;