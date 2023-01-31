import React, { useEffect, useState } from 'react';

/*Components*/
import { Table } from 'components/table/Table';
import { Breadcrumbs } from 'components/breadcrumbs/Breadcrumbs';
import { Toast } from 'components/toast/Toast';

/*EUI Components*/
import { EuiProvider, EuiFlexGroup, EuiFlexItem, EuiSpacer } from '@elastic/eui';

/*Styled components*/
import { StorageTableLayout } from './PersonalStorage.styled';

/*Generators*/
import { generateColumns } from './personalStorageColumns';
import { generateActions } from './personalStorageActions';
import { generateModals } from '../modals/Modals';

/*Services*/
import folderService from 'services/folderServices';

/*Actions*/
import { CreateFolder } from '../actions/folderActions/createFolder';
import { UploadFile } from '../actions/fileActions/uploadFile';

/*Hooks*/
import { RootState, useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';

/*Types*/
import { StorageItem } from './types';
import { ListTableSortDirection } from 'components/table/types';
import { BreadcrumbItemProps } from 'components/breadcrumbs/types';
import { Toast as ToastType } from '@elastic/eui/src/components/toast/global_toast_list';

/*State management*/
import { setCurrentItem, setIsLoading } from 'store/table.slice';

/*Helpers*/
import { convertDirection, convertSortingField } from 'utils/helpers';

export const StorageTable = () => {
  const dispatch = useAppDispatch();

  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortField, setSortField] = useState<keyof StorageItem>('name');
  const [sortDirection, setSortDirection] = useState<ListTableSortDirection>('asc');
  const [totalItems, setTotalItems] = useState<number>(0);
  const [items, setItems] = useState<StorageItem[]>([]);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [item, setItem] = useState<StorageItem['itemId']>('');
  const [modal, setModal] = useState<string>();
  const [itemName, setItemName] = useState<StorageItem['name']>('');
  const [crumbs, setCrumbs] = useState<BreadcrumbItemProps[]>([]);
  const isLoading = useSelector<RootState, boolean>((state) => state.table.isLoading);
  const currentItem = useSelector<RootState, StorageItem['itemId']>(
    (state) => state.table.currentItem
  );

  const cuttedItem = useSelector<RootState, StorageItem['itemId']>(
    (state) => state.table.cuttedItem
  );
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const paginationState = {
    pageIndex,
    setPageIndex,
    pageSize,
    setPageSize,
  };

  const sortingState = {
    sortField,
    setSortField,
    sortDirection,
    setSortDirection,
  };

  const itemState = {
    totalItems,
    setTotalItems,
    items,
    setItems,
    item,
    setItem,
    itemName,
    setItemName,
    currentItem,
  };

  const getItems = async (id: StorageItem['itemId']) => {
    dispatch(setIsLoading(true));
    if (id !== currentItem) {
      dispatch(setCurrentItem(id));
      setPageIndex(0);
    }
    return folderService
      .getFolder({
        folderId: id,
        sortType: convertSortingField(sortField) as number,
        sortDirection: convertDirection(sortDirection),
        pageSize: pageSize,
        pageNumber: id == currentItem ? pageIndex + 1 : 1,
      })
      .then((response) => {
        setItems(response.data.items);
        setTotalItems(response.data.totalCount);
        dispatch(setIsLoading(false));
        setCrumbs(response.data.breadCrumps);
      })
      .catch(() => dispatch(setIsLoading(false)));
  };

  useEffect(() => {
    getItems(currentItem);
  }, [pageIndex, pageSize, sortDirection, sortField, currentItem, totalItems]);

  const GeneratedModals = generateModals({
    item,
    itemName,
    modal,
    isShown,
    setIsShown,
    currentItem,
    getItems,
    toasts,
    setToasts,
  });

  const GeneratedActions = generateActions({
    setIsShown,
    setModal,
    setItem,
    setItemName,
    cuttedItem,
    getItems,
    currentItem,
    toasts,
    setToasts,
  });

  const GeneratedColumns = generateColumns();

  const getRowProps = ({ itemId }: { itemId: string }) => {
    if (itemId == cuttedItem) {
      return {
        className: 'cuttedItemRowProps',
        onClick: () => {
          return true;
        },
      };
    } else {
      return {
        className: 'rowProps',
        onClick: () => {
          return true;
        },
      };
    }
  };

  const GeneratedStorageTable = new Table<StorageItem>().generate({
    GeneratedActions,
    GeneratedColumns,
    getRowProps,
    getItems,
    GeneratedModals,
    paginationState,
    sortingState,
    isLoading,
    itemState,
    cuttedItem,
  });

  return (
    <>
      <Breadcrumbs crumbs={crumbs} getItems={getItems} />
      <StorageTableLayout>
        <EuiProvider colorMode='light'>
          <EuiFlexGroup alignItems='flexEnd' direction='column' justifyContent='center'>
            <EuiFlexItem grow={true}>
              <EuiFlexGroup>
                {currentItem != null && (
                  <UploadFile setToasts={setToasts} toasts={toasts} getItems={getItems} />
                )}
                <CreateFolder setToasts={setToasts} toasts={toasts} getItems={getItems} />
              </EuiFlexGroup>
            </EuiFlexItem>
            <EuiSpacer size='xl' />
            <GeneratedStorageTable items={items} totalItems={totalItems} />
          </EuiFlexGroup>
        </EuiProvider>
        <Toast toasts={toasts} setToasts={setToasts} />
      </StorageTableLayout>
    </>
  );
};
