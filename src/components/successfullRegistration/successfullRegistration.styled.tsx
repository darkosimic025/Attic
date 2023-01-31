import styled from 'styled-components';

export const SuccessfulRegistration = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const SuccessfulRegistrationText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  text-align: center;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.success};
`;
