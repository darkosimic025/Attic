export const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

export const API_URL = {
  user: 'User',
  folder: 'Folder/',
  file: 'File/',
  permission: 'Permission/',
  trash: 'Trash/',
  notifications: 'Notification',
  runtime: 'Runtime',
};

export const PATHS = {
  register: '/register',
  login: '/login',
  logout: '/logout',
  getUser: '/getUser',
  updateIserPersonalInformation: '/updateUserPersonalInformation',
  updateUserProfilePicture: '/Picture/',
  getUserProfilePicture: '/Picture/',
  removeUserProfilePicture: '/Picture/',
  changePassword: '/changePassword',
  profilePicture: '/Picture/',
  renameFolder: 'Rename',
  renameFile: 'Rename',
  moveFile: 'Move',
  shareFolder: 'share-access',
  inviteToFolder: 'share-control',
  restoreItem: 'restore',
};
