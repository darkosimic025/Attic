import React from 'react';

/* Libraries */
import styled from 'styled-components';

import * as Icon from '@styled-icons/fluentui-system-regular';

export const SidebarRootIcon = styled(Icon.Home)`
  width: 25px;
`;

export const SidebarRootLabel = styled.div`
  margin-left: 16px;
`;

export const SidebarRoot = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSidebar};
  padding: 20px;
  background-color: #e3e3e4;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 15px;
  font-weight: bold;
`;

export const SidebarIconLabel = styled.div``;

export const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.borderSidebar};
  padding: 20px;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 15px;
  list-style: none;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    text-decoration: underline;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  margin-left: 35px;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.textSidebar};
  font-size: 15px;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SidebarNav = styled.nav`
  min-width: 270px;
  user-select: none;
  -moz-user-select: none;
  height: 100%;
  background: ${({ theme }) => theme.colors.light};
  overflow-y: scroll;
  z-index: 3;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SidebarIcon = styled(({ icon, ...props }) => React.cloneElement(icon, props))`
  width: 25px;
`;

export const SidebarOpenedIcon = styled(({ iconOpened, ...props }) =>
  React.cloneElement(iconOpened, props)
)`
  display: flex;
  width: 20px;
`;

export const SidebarClosedIcon = styled(({ iconClosed, ...props }) =>
  React.cloneElement(iconClosed, props)
)`
  width: 20px;
`;
