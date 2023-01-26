import { ReactElement } from 'react';

export interface SubNavProps {
  title?: string;
  navigateToPage: () => void;
  icon?: ReactElement;
  id?: string;
}

export interface SideBarDataProps {
  title?: string;
  navigateToPage: () => void;
  icon?: ReactElement;
  iconClosed?: ReactElement;
  iconOpened?: ReactElement;
  subNav?: SubNavProps[];
  id?: string;
  isOpened?: boolean;
}

export interface SidebarItem {
  itemId: string | null;
  itemName: string;
}
