import React, { FC, useCallback } from 'react';

/*EUI Components*/
import {
  EuiBasicTable,
  CriteriaWithPagination,
  EuiBasicTableColumn,
  Criteria,
  EuiFormRowProps,
} from '@elastic/eui';

/*EUI Theme provider*/
import '@elastic/eui/dist/eui_theme_light.css';

/*Styles*/
import './style.css';

/*Types*/
import { GenerateTableProps, PaginationAndSorting, ItemsTableProps } from './types';
import PropTypes from 'prop-types';

/*Constants*/
import { Pagination } from './paginationConst';

export class Table<T> {
  generate({
    GeneratedActions,
    GeneratedColumns,
    GeneratedModals,
    getItems,
    paginationState,
    sortingState,
    isLoading,
    getRowProps,
  }: GenerateTableProps<T>) {
    const Table: FC<ItemsTableProps<T>> = ({ items, totalItems }) => {
      const pageSizeOptions = Pagination.default;

      const { pageIndex, setPageIndex, pageSize, setPageSize } = paginationState;
      const { sortField, setSortField, sortDirection, setSortDirection } = sortingState;

      const onTableChange = useCallback(
        ({
          page: { index: pageIndex, size: pageSize },
          sort: { field: sortField, direction: sortDirection },
        }: PaginationAndSorting<T>) => {
          setPageIndex(pageIndex);
          setPageSize(pageSize);
          setSortField(sortField);
          setSortDirection(sortDirection);
        },
        [pageSize, sortField, sortDirection, items]
      );

      const pagination = {
        pageIndex: pageIndex,
        pageSize: pageSize,
        totalItemCount: totalItems,
        pageSizeOptions: pageSizeOptions,
      };

      const sorting = {
        sort: {
          field: sortField,
          direction: sortDirection,
        },
      };

      const getCellProps = ({ itemId }: { itemId: string }, column: EuiBasicTableColumn<T>) => {
        const { name } = column;

        return {
          className: 'customCellClass',
          textOnly: true,
          onDoubleClick: () => {
            getItems && getItems(itemId);
          },
        };
      };
      return (
        <>
          <EuiBasicTable<T>
            items={items}
            columns={
              GeneratedActions ? [...GeneratedColumns, GeneratedActions] : [...GeneratedColumns]
            }
            pagination={pagination}
            sorting={sorting}
            hasActions={true}
            responsive={true}
            isSelectable={true}
            onChange={
              onTableChange as
                | ((criteria: Criteria<T>) => void)
                | ((criteria: CriteriaWithPagination<T>) => void)
            }
            rowProps={getRowProps as object | EuiFormRowProps | undefined}
            cellProps={getCellProps}
            loading={isLoading}
          />
          {GeneratedModals}
        </>
      );
    };
    //Added this because of eslint props error
    Table.propTypes = {
      items: PropTypes.array.isRequired,
      totalItems: PropTypes.number.isRequired,
    };
    return Table;
  }
}
