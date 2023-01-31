import React from 'react';

/*Libraries*/
import styled from 'styled-components';

export const DropDownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  top: 62px;
  right: 12px;
  width: 250px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.elementShadow};
  z-index: 2;
  animation-name: fade-translate;
  animation-duration: 0.2s;
  animation-timing-function: linear;
  user-select: none;
  -moz-user-select: none;

  @keyframes fade-translate {
    0% {
      opacity: 0.1;
      transform: translateY(3px);
    }
    50% {
      opacity: 0.5;
      transform: translateY(1.5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 22px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.light};
    transform: rotate(45deg);
    z-index: 9;
  }
`;

export const DropDownMenuName = styled.div`
  height: 45px;
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;
export const DropDownMenuNameText = styled.span`
  font-size: 14px;
  font-weight: bolder;
`;

export const DropDownMenuItemLabel = styled.span`
  display: inline-block;
  width: 300px;
  text-align: center;
  font-size: 14px;
`;

export const DropDownMenuItem = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderInput};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &:hover ${DropDownMenuItemLabel} {
    text-decoration: underline;
  }
`;

export const DropDownMenuItemIcon = styled(({ icon, ...props }) => React.cloneElement(icon, props))`
  width: 20px;
  position: absolute;
  margin-left: 17px;
`;

export const DropDownMenuSignOut = styled.div`
  height: 56px;
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderInput};
`;
