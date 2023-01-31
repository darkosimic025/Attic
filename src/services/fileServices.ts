/*Libraries*/
import axios from 'axios';

/*Constants*/
import { API_URL, PATHS, BASE_URL } from 'utils/urlConstants';

const fileEndpoint = BASE_URL + API_URL.file;
const renameFileEndpoint = BASE_URL + API_URL.file + PATHS.renameFile;
const moveFileEndpoint = BASE_URL + API_URL.file + PATHS.moveFile;

const postFile = ({ folderId, data }: { folderId: string | null; data: FormData }) => {
  return axios.post(fileEndpoint, data, { withCredentials: true, params: { folderId } });
};

const deleteFile = ({ fileId }: { fileId: string }) => {
  return axios.delete(fileEndpoint + fileId, { withCredentials: true });
};

const renameFile = ({ item, newName }: { item: string; newName: string }) => {
  return axios.patch(
    renameFileEndpoint,
    { id: item, newName: newName },
    {
      withCredentials: true,
      params: { id: item, newName: newName },
    }
  );
};

const getFile = ({ fileId }: { fileId: string }) => {
  return axios.get(fileEndpoint + fileId, { withCredentials: true, responseType: 'blob' });
};

const moveFile = ({ fileId, newFolder }: { fileId: string; newFolder: string }) => {
  return axios.patch(
    moveFileEndpoint,
    {},
    {
      withCredentials: true,
      params: { fileId, newFolder },
    }
  );
};

const fileService = {
  postFile,
  deleteFile,
  renameFile,
  getFile,
  moveFile,
};

export default fileService;
