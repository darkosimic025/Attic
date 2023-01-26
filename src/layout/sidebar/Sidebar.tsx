import React from 'react';

/* Components */
import { SidebarData } from './SidebarData';
import { SubMenu } from './SubMenu';

/* Styled components */
import {
  SidebarNav,
  SidebarRoot,
  SidebarRootIcon,
  SidebarRootLabel,
  SidebarWrap,
} from './Sidebar.styled';

import { useNavigate } from 'react-router-dom';

/* Types */
import { SideBarDataProps } from './types';

export const SideBar = () => {
  const navigate = useNavigate();

  const SidebarDataArray = SidebarData(navigate);

  return (
    <>
      <SidebarNav>
        <SidebarRoot>
          <SidebarRootIcon />
          <SidebarRootLabel>Home</SidebarRootLabel>
        </SidebarRoot>
        <SidebarWrap>
          {SidebarDataArray.map(
            ({
              icon,
              iconClosed,
              iconOpened,
              navigateToPage,
              subNav,
              title,
              id,
              isOpened,
            }: SideBarDataProps) => (
              <SubMenu
                key={title}
                isOpened={isOpened}
                icon={icon}
                iconClosed={iconClosed}
                iconOpened={iconOpened}
                navigateToPage={navigateToPage}
                subNav={subNav}
                title={title}
                id={id}
              />
            )
          )}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};
