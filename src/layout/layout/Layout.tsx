import React from 'react';

/*Components*/
import { Header } from '../header/Header';
import { SideBar } from 'layout/sidebar/Sidebar';

/*Types*/
import { RouteProps } from 'react-router-dom';

/*Styled components*/
import { LayoutArrange, SideBarWithPageArrange } from './Layout.styled';

const Layout = ({ children }: RouteProps) => (
  <LayoutArrange>
    <Header />
    <SideBarWithPageArrange>
      <SideBar />
      {children}
    </SideBarWithPageArrange>
  </LayoutArrange>
);
export default Layout;
