/*Libraries*/
import styled from 'styled-components';

/*Icons*/
import { Alert } from '@styled-icons/fluentui-system-regular';

export const NotificationsIconNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -7px;
  right: -7px;
  width: 19px;
  height: 19px;
  line-height: 19px;
  font-weight: bold;
  border-radius: 50%;
  background-color: #e04848;
  color: white;
  transition: 1s;
  animation: scale 0.8s both;
  @keyframes scale {
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const NotificationsIcon = styled(Alert)`
  position: relative;
  width: 25px;
  color: ${({ theme }) => theme.colors.light};
  cursor: pointer;

  &:hover {
    animation: tilt-shaking 0.3s;
    @keyframes tilt-shaking {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(15deg);
      }
      50% {
        transform: rotate(0deg);
      }
      75% {
        transform: rotate(-15deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;

export const NotificationsWrapper = styled.div`
  position: relative;
`;
