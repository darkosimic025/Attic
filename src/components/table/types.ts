import { Dispatch, SetStateAction } from 'react';

/*EUI Types*/
import { EuiTableActionsColumnType, EuiBasicTableColumn } from '@elastic/eui';

export type ListTableSortDirection = 'asc' | 'desc';

export interface PaginationAndSorting<T> {
  page: {
    index: number;
    size: number;
    totalItemCount: number;
  };
  sort: {
    field: keyof T;
    direction: 'asc' | 'desc';
  };
}

export interface ItemsTableProps<T> {
  items: T[];
  totalItems: number;
}

export interface GetItemsProps<T> {
  setItems: Dispatch<SetStateAction<T[]>>;
  setTotalItems: Dispatch<SetStateAction<number>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setOpenedItem?: Dispatch<SetStateAction<string | null | undefined>>;
  folderId: string | null;
  sortType: number;
  sortDirection: number;
  pageSize: number;
  pageNumber: number;
}

export interface GenerateTableProps<T> {
  GeneratedActions?: EuiTableActionsColumnType<T>;
  GeneratedColumns: EuiBasicTableColumn<T>[];
  GeneratedModals?: JSX.Element | undefined;
  getRowProps?: unknown;
  paginationState: {
    pageIndex: number;
    setPageIndex: Dispatch<SetStateAction<number>>;
    pageSize: number;
    setPageSize: Dispatch<SetStateAction<number>>;
  };
  sortingState: {
    sortField: keyof T;
    setSortField: Dispatch<SetStateAction<keyof T>>;
    sortDirection: ListTableSortDirection;
    setSortDirection: Dispatch<SetStateAction<ListTableSortDirection>>;
  };
  isLoading: boolean;
  cuttedItem?: string | null;
  itemState?: {
    totalItems: number | undefined;
    items: T[];
  };
  getItems?: (id: string | null) => Promise<void | { payload: T[]; type: string }>;
}
