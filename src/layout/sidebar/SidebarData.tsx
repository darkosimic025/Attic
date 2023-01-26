import React, { useState, useEffect } from 'react';

/* Icons */
import {
  PeopleCommunity,
  Storage,
  ChevronRight,
  ChevronDown,
  Folder,
  ShareAndroid,
  Person,
  PersonSettings,
  LockClosed,
  DataHistogram,
  Delete,
  Code
} from '@styled-icons/fluentui-system-regular';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { paths } from 'paths/paths';

/*Types*/
import { NavigateFunction } from 'react-router-dom';
import { StorageItem } from 'components/storage/personalStorage/types';

/* Utils */
import { IDsForTesting } from 'utils/idsForTesting';
import folderService from 'services/folderServices';
import { useAppDispatch } from 'store/store';
import { setCurrentItem } from 'store/table.slice';

export const SidebarData = (navigate: NavigateFunction) => {
  const [items, setFolders] = useState([]);
  const control = 2;
  const sortbyName = 1;

  const dispatch = useAppDispatch();

  useEffect(() => {
    folderService
      .getFolder({
        folderId: null,
        sortType: sortbyName,
        sortDirection: null,
        pageSize: null,
        pageNumber: null,
      })
      .then((response) => {
        setFolders(response.data.items);
      })
      .catch(() => setFolders([]));
  }, []);

  return [
    {
      title: textKeys.sidebar_title_storage,
      navigateToPage: () => navigate(paths.STORAGE),
      icon: <Storage />,
      iconClosed: <ChevronRight />,
      iconOpened: <ChevronDown />,
      isOpened: true,
      id: IDsForTesting.sidebar_storage_id,
      subNav: items.map(({ name, itemId }: StorageItem) => {
        return {
          title: name,
          icon: <Folder />,
          navigateToPage: async () => {
            await navigate(paths.STORAGE);
            await dispatch(setCurrentItem(itemId));
          },
        };
      }),
    },
    {
      title: textKeys.sidebar_title_shared,
      navigateToPage: () => navigate(paths.SHARED),
      icon: <ShareAndroid />,
      iconClosed: <ChevronRight />,
      iconOpened: <ChevronDown />,
      id: IDsForTesting.sidebar_shared_id,
    },
    {
      title: textKeys.sidebar_title_organization,
      navigateToPage: () => navigate(paths.ORGANIZATION),
      icon: <PeopleCommunity />,
      iconClosed: <ChevronRight />,
      iconOpened: <ChevronDown />,
      id: IDsForTesting.sidebar_organization_id,
    },
    {
      title: 'Lambda',
      navigateToPage: () => navigate(paths.LAMBDA),
      icon: <Code />,
      id: IDsForTesting.sidebar_shared_id,
    },
    {
      title: textKeys.sidebar_title_account_management,
      icon: <Person />,
      iconClosed: <ChevronRight />,
      iconOpened: <ChevronDown />,
      navigateToPage: () => navigate(paths.PERSONALINFORMATION),
      id: IDsForTesting.sidebar_account_management_id,
      subNav: [
        {
          title: textKeys.subnav_title_personal_information,
          navigateToPage: () => navigate(paths.PERSONALINFORMATION),
          icon: <PersonSettings />,
          id: IDsForTesting.sidebar_subnav_personal_information_id,
        },
        {
          title: textKeys.subnav_title_change_password,
          navigateToPage: () => navigate(paths.CHANGEPASSWORD),
          icon: <LockClosed />,
          id: IDsForTesting.sidebar_subnav_change_password_id,
        },
        {
          title: textKeys.subnav_title_storage_details,
          navigateToPage: () => navigate(paths.STATISTICS),
          icon: <DataHistogram />,
          id: IDsForTesting.sidebar_subnav_storage_details_id,
        },
      ],
    },
    {
      title: textKeys.sidebar_title_trash,
      navigateToPage: () => navigate(paths.TRASH),
      icon: <Delete />,
      iconClosed: <ChevronRight />,
      iconOpened: <ChevronDown />,
      id: IDsForTesting.sidebar_trash_id,
    },
  ];
};
