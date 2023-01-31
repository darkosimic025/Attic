import React from 'react';

/*Styled components*/
import { BreadcrumbsItem, BreadcrumbsSeparator, BreadcrumbsWrapper } from './Breadcrumbs.styled';

/*Types*/
import { BreadcrumbItemProps, BreadcrumbsProps } from './types';

export const Breadcrumbs = ({ crumbs, getItems }: BreadcrumbsProps) => {
  function isLast(index: number) {
    return index === crumbs.length - 1;
  }
  const handleClick = (id: string | null, index: number) => {
    !isLast(index) && getItems && getItems(id);
  };
  return (
    <BreadcrumbsWrapper>
      {crumbs.map(({ id, text }: BreadcrumbItemProps, index) => (
        <>
          <BreadcrumbsItem isLast={isLast(index)} onClick={() => handleClick(id, index)} key={id}>
            {text}
          </BreadcrumbsItem>
          <BreadcrumbsSeparator key={index} isLast={isLast(index)} />
        </>
      ))}
    </BreadcrumbsWrapper>
  );
};
