/*Libraries*/
import axios from 'axios';

/*Constants*/
import { API_URL, PATHS, BASE_URL } from 'utils/urlConstants';

const trashEndpoint = BASE_URL + API_URL.trash;
const restoreItemFileEndpoint = BASE_URL + API_URL.trash + PATHS.restoreItem;

export interface GetTrashParams {
  sortType: number;
  sortDirection: number;
  pageSize: number;
  pageNumber: number;
}

export const getTrash = ({ sortType, sortDirection, pageSize, pageNumber }: GetTrashParams) => {
  return axios.get(trashEndpoint, {
    withCredentials: true,
    params: {
      sortType: sortType,
      sortDirection: sortDirection,
      pageSize: pageSize,
      pageNumber: pageNumber,
    },
  });
};

export const restoreItem = ({ itemId }: { itemId: string }) => {
  return axios.put(
    restoreItemFileEndpoint,
    {},
    {
      withCredentials: true,
      params: {
        itemId,
      },
    }
  );
};

const trashService = {
  getTrash,
  restoreItem,
};

export default trashService;
