/* Libraries */
import styled from 'styled-components';

export const StyledChangePasswordWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  min-width: 400px;
`;

export const ChangePasswordFieldsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Layout = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  background-color: ${({ theme }) => theme.colors.light};
  overflow: hidden;
`;
