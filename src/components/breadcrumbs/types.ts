export interface BreadcrumbItemProps {
  id: string | null;
  text: string;
}

export interface BreadcrumbsProps {
  crumbs: BreadcrumbItemProps[];
  getItems?: (id: string | null) => Promise<void | { payload: []; type: string }>;
}

export interface BreadcrumbsStyleProps {
  children: string;
  isLast: boolean;
}

export interface BreadcrumbsSeparatorProps {
  isLast: boolean;
}
