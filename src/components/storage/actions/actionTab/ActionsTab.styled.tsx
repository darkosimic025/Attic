import { cloneElement } from 'react';

/*Libraries*/
import styled from 'styled-components';

export interface ActionTabLabelProps {
  hasLabel: boolean;
}

export const ActionTabWrapper = styled.div``;

export const ActionTabLabel = styled.span<ActionTabLabelProps>`
  margin: ${({ hasLabel }) => (hasLabel ? '0 10px' : '0')};
`;

export const ActionsTabIcon = styled(({ icon, ...props }) => cloneElement(icon, props))`
  width: 20px;
`;
