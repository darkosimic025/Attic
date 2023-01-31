import styled from 'styled-components';

/*Types*/
import { BreadcrumbsSeparatorProps, BreadcrumbsStyleProps } from './types';

/*Icons*/
import { IosArrowRight } from '@styled-icons/fluentui-system-regular';

export const BreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 21px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSidebar};
  background-color: ${({ theme }) => theme.colors.breadCrumbs.background};
`;

export const BreadcrumbsItem = styled.div<BreadcrumbsStyleProps>`
  margin: 3px;
  font-weight: 500;
  font-size: 15px;
  color: ${({ isLast, theme }) =>
    isLast ? theme.colors.breadCrumbs.breadcrumbLast : theme.colors.breadCrumbs.breadcrumbNotLast};
  cursor: ${({ isLast }) => (isLast ? 'default' : 'pointer')};
  &:hover {
    color: ${({ isLast, theme }) => !isLast && theme.colors.breadCrumbs.breadcrumbHover};
    text-decoration: ${({ isLast }) => (isLast ? 'none' : 'underline')};
  }
`;

export const BreadcrumbsSeparator = styled(IosArrowRight)<BreadcrumbsSeparatorProps>`
  height: 12px;
  margin: 3px;
  visibility: ${({ isLast }) => (isLast ? 'hidden' : 'visible')};
  color: ${({ theme }) => theme.colors.breadCrumbs.breadcrumbsSeparator};
  cursor: default;
`;
