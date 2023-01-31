import React, { useEffect, useState } from 'react';

/*EUI Components*/
import { EuiFlexGroup, EuiFlexItem, EuiProvider, EuiSpacer } from '@elastic/eui';

/*Components*/
import { Breadcrumbs } from 'components/breadcrumbs/Breadcrumbs';
import { Table } from 'components/table/Table';
import { NotificationsToast } from './NotificationsToast';

/*Types*/
import { BreadcrumbItemProps } from 'components/breadcrumbs/types';
import { ListTableSortDirection } from 'components/table/types';
import { RootState } from 'store/store';
import { NotificationsItem } from './types';

/*Hooks*/
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/store';

/*Actions*/
import { getNotifications } from 'store/notifications.actions';
import { setIsLoading } from 'store/table.slice';
import { NotificationsActions } from './NotificationsActions';

/*Styled components*/
import { NotificationsTableLayout } from './Notifications.styled';

/*Generators*/
import { generateColumns } from './NotificationsTableColumns';
import { textKeys } from 'utils/textKeys';
import { EUISizes } from 'theme/EuiEnums';

export const NotificationsTable = () => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector<RootState, boolean>((state) => state.table.isLoading);
  const numberOfNotifications = useSelector<RootState, number>(
    (state) => state.notifications.numberOfNotifications
  );

  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortField, setSortField] = useState<keyof NotificationsItem>('sender');
  const [sortDirection, setSortDirection] = useState<ListTableSortDirection>('asc');
  const [totalItems, setTotalItems] = useState<number>(0);
  const [items, setItems] = useState<NotificationsItem[]>([]);
  const [item, setItem] = useState<NotificationsItem['dateCreation']>('');
  const [crumbs] = useState<BreadcrumbItemProps[]>([
    {
      id: null,
      text: textKeys.notifications_breadcrumbs_text,
    },
  ]);

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
    setItems,
    items,
    item,
    setItem,
  };

  const getItems = async () => {
    dispatch(setIsLoading(true));
    dispatch(getNotifications())
      .unwrap()
      .then((notifications) => {
        setItems(notifications.data.notificationList);
        setTotalItems(10);
        dispatch(setIsLoading(false));
      })
      .catch(() => dispatch(setIsLoading(false)));
  };

  useEffect(() => {
    getItems();
  }, [pageIndex, pageSize, sortDirection, sortField, totalItems, numberOfNotifications]);

  const GeneratedColumns = generateColumns();

  const getRowProps = ({ isRead }: { isRead: boolean }) => {
    return {
      className: 'rowProps',
      onClick: () => {
        return true;
      },
    };
  };

  const GeneratedNotificationsTable = new Table<NotificationsItem>().generate({
    GeneratedColumns,
    getItems,
    getRowProps,
    paginationState,
    sortingState,
    isLoading,
    itemState,
  });

  return (
    <>
      <Breadcrumbs crumbs={crumbs} getItems={getItems} />
      <NotificationsTableLayout>
        <EuiProvider colorMode='light'>
          <EuiFlexGroup alignItems='flexEnd' direction='column' justifyContent='center'>
            <EuiFlexItem grow={true}>
              <EuiFlexGroup>
                <NotificationsActions getItems={getItems} />
              </EuiFlexGroup>
            </EuiFlexItem>
          <EuiSpacer size={EUISizes.XLarge} />
            <GeneratedNotificationsTable items={items} totalItems={totalItems} />
          </EuiFlexGroup>
        </EuiProvider>
        <NotificationsToast />
      </NotificationsTableLayout>
    </>
  );
};
