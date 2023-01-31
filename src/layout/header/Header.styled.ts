/*Libraries*/
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 55px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadows.elementShadow};
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
  justify-content: space-evenly;
`;

export const LogoIcon = styled.img`
  width: 40px;
`;

export const HeaderAppName = styled.span`
  color: ${({ theme }) => theme.colors.light};
  font-weight: bolder;
  font-size: 16px;
`;

export const ProfileWrapper = styled.div`
  min-width: 120px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  object-fit: cover;
  cursor: pointer;
  outline: 2px rgba(255, 255, 255, 0.8) solid;

  &:hover {
    outline: 3px rgba(255, 255, 255, 0.9) solid;
    transition: all 0.1s;
  }
`;
