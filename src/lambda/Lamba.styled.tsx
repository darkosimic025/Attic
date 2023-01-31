import styled from 'styled-components';

export const LambdaPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  background-color: ${({ theme }) => theme.colors.light};
  overflow: hidden;
`;

export const LambdaLayout = styled.div`
  width: 90%;
  margin: 100px 0;
`;
