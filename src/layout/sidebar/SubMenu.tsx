import React, { useState } from 'react';

/*Styled components*/
import {
  SidebarLink,
  SidebarLabel,
  DropdownLink,
  SidebarIcon,
  SidebarOpenedIcon,
  SidebarClosedIcon,
  SidebarIconLabel,
} from './Sidebar.styled';

/*Types*/
import { SideBarDataProps, SubNavProps } from './types';

export const SubMenu = ({
  title,
  subNav,
  iconClosed,
  icon,
  iconOpened,
  navigateToPage,
  isOpened,
}: SideBarDataProps) => {
  const [subnav, setSubnav] = useState(isOpened);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        onClick={
          subNav
            ? showSubnav 
            : () => {
                navigateToPage();
              }
        }
      >
        <SidebarIconLabel>
          <SidebarIcon icon={icon}></SidebarIcon>
          <SidebarLabel>{title}</SidebarLabel>
        </SidebarIconLabel>
        {subNav && subnav ? (
          <SidebarOpenedIcon iconOpened={iconOpened}></SidebarOpenedIcon>
        ) : subNav ? (
          <SidebarClosedIcon iconClosed={iconClosed}></SidebarClosedIcon>
        ) : null}
      </SidebarLink>
      {subnav &&
        subNav?.map(({ title, icon, id, navigateToPage }: SubNavProps) => {
          return (
            <DropdownLink onClick={() => navigateToPage()} key={title} id={id}>
              <SidebarIcon icon={icon}></SidebarIcon>
              <SidebarLabel>{title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
