/*Libraries*/
import axios from 'axios';

/*Types*/
import { RenameProps, ShareInviteProps } from 'components/storage/actions/folderActions/types';

/*Constants*/
import { API_URL, PATHS, BASE_URL } from 'utils/urlConstants';

const folderEndpoint = BASE_URL + API_URL.folder;
const renameFolderEndpoint = BASE_URL + API_URL.folder + PATHS.renameFolder;
const shareFolderEndpoint = BASE_URL + API_URL.permission + PATHS.shareFolder;
const inviteToFolderEndpoint = BASE_URL + API_URL.permission + PATHS.inviteToFolder;

export interface GetFolderParams {
  folderId: string | null;
  sortType: number;
  lookingForDeletedItems?: boolean;
  sortDirection: number | null;
  pageSize: number | null;
  pageNumber: number | null;
}

export interface PostFolderParams {
  name: string;
  parentId: string | null;
}

const getFolder = ({
  folderId,
  sortType,
  sortDirection,
  pageSize,
  pageNumber,
  lookingForDeletedItems,
}: GetFolderParams) => {
  return axios.get(folderEndpoint, {
    withCredentials: true,
    params: {
      lookingForDeletedItems,
      folderId: folderId,
      sortType: sortType,
      sortDirection: sortDirection,
      pageSize: pageSize,
      pageNumber: pageNumber,
    },
  });
};

const postFolder = ({ name, parentId }: PostFolderParams) => {
  return axios.post(
    folderEndpoint,
    {
      name: name,
      parentId: parentId,
    },
    {
      withCredentials: true,
    }
  );
};

const renameFolder = ({ id, newName }: RenameProps) => {
  return axios.patch(
    renameFolderEndpoint,
    {
      id: id,
      newName: newName,
    },
    {
      withCredentials: true,
    }
  );
};

const shareFolder = ({ folderId, invitedUserEmail }: ShareInviteProps) => {
  return axios.post(
    shareFolderEndpoint,
    {},
    {
      withCredentials: true,
      params: { folderId: folderId, invitedUserEmail },
    }
  );
};

const inviteToFolder = ({ folderId, invitedUserEmail }: ShareInviteProps) => {
  return axios.post(
    inviteToFolderEndpoint,
    {},
    {
      withCredentials: true,
      params: { folderId: folderId, invitedUserEmail },
    }
  );
};

const deleteFolder = ({ folderId }: { folderId: string }) => {
  return axios.delete(folderEndpoint + folderId, { withCredentials: true });
};

const folderService = {
  getFolder,
  postFolder,
  renameFolder,
  shareFolder,
  inviteToFolder,
  deleteFolder,
};

export default folderService;
