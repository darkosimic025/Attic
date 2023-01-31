/*Libraries*/
import styled from 'styled-components';

/*Styled components*/
import { StyledButton } from 'components/UI/button/Button.styled';

/*Types*/
import { RemoveButtonProps } from './types';

export const RemoveProfilePictureButton = styled(StyledButton)<RemoveButtonProps>`
  justify-self: flex-end;
  align-self: flex-end;
  width: 25%;
  margin: 0;
  visibility: ${({ visible }) => visible};
`;
