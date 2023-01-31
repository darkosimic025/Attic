import React from 'react';

/*Styled components*/
import { ActionsTabIcon, ActionTabLabel, ActionTabWrapper } from './ActionsTab.styled';

/*Types*/
import { ActionTabProps } from './types';

export const ActionsTab = ({ label, icon, handleClick, hasLabel }: ActionTabProps) => (
  <ActionTabWrapper onClick={handleClick}>
    <ActionsTabIcon icon={icon} />
    <ActionTabLabel hasLabel={hasLabel}>{label}</ActionTabLabel>
  </ActionTabWrapper>
);
