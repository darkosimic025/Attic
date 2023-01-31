/*Libraries*/
import styled from 'styled-components';

export const PersonalInformationPage = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: ${({ theme }) => theme.colors.light};
  overflow: hidden;
`;

export const PersonalInformationInputFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 400px;
`;

export const PersonalInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
