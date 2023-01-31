import React from 'react';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { paths } from 'paths/paths';

/*Icons*/
import * as Icons from '@styled-icons/fluentui-system-regular';

/*Types*/
import { NavigateFunction } from 'react-router-dom';

/*Constants*/
import { IDsForTesting } from 'utils/idsForTesting';

export const dropDownMenuItems = (navigate: NavigateFunction) => {
  return [
    {
      name: textKeys.dropdown_name_personal_information,
      label: textKeys.dropdown_label_personal_information,
      icon: <Icons.PersonSettings />,
      navigateToPage: () => navigate(paths.PERSONALINFORMATION),
      id: IDsForTesting.header_dropdown_menu_tab_personal_information_id,
    },
    {
      name: textKeys.dropdown_name_change_password,
      label: textKeys.dropdown_label_change_password,
      icon: <Icons.LockClosed />,
      navigateToPage: () => navigate(paths.CHANGEPASSWORD),
      id: IDsForTesting.header_dropdown_menu_tab_change_password_id,
    },
    {
      name: textKeys.dropdown_name_statistics,
      label: textKeys.dropdown_label_statistics,
      icon: <Icons.DataHistogram />,
      navigateToPage: () => navigate(paths.STATISTICS),
      id: IDsForTesting.header_dropdown_menu_tab_statistics_id,
    },
  ];
};
