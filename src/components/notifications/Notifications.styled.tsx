import styled from 'styled-components';

export const NotificationsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadows.pageShadow};
  background-color: ${({ theme }) => theme.colors.light};
  overflow: hidden;
`;

export const NotificationsTableLayout = styled.div`
  width: 90%;
  margin: 40px 0;
`;

export const NotificationsToastContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const NotificationsSenderPicture = styled.img`
  //Somehow EUI styles get mixed up with style for styled components, so i needed to put !important here
  width: 50px !important;
  height: 45px;
  margin-block-end: 0 !important;
  border-radius: 50%;
`;

export const NotificationContent = styled.div`
  width: 100%;
  margin-left: 10px;
  font-size: 16px;
`;

export const NotificationsCellWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NotificationsCellSenderPicture = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const NotificationsCellSenderName = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;
