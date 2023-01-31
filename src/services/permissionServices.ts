/*Libraries*/
import axios from 'axios';

/*Constants*/
import { API_URL, BASE_URL } from 'utils/urlConstants';

const permissionEndpoint = BASE_URL + API_URL.permission;
export interface PermissionParams {
  sortType: number;
  sortDirection: number | null;
  pageSize: number | null;
  pageNumber: number | null;
}

const getPermission = ({
  sortType,
  sortDirection,
  pageSize,
  pageNumber,
}: PermissionParams) => {
    return axios.get(permissionEndpoint, {
        withCredentials: true,
        params: {
          sortType: sortType,
          sortDirection: sortDirection,
          pageSize: pageSize,
          pageNumber: pageNumber
        },
    });
};

export const PermissionService = { getPermission }