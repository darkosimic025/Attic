import styled from 'styled-components';

export const StyledRegistrationFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 20px;
  max-width: 480px;
  min-height: 90%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.light};
`;

export const StyledRegistrationHeader = styled.h1`
  font-size: 30px;
  width: 90%;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
  margin: 3rem auto 5rem auto;
`;

export const RegistrationLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 90%;
`;

export const RegistrationError = styled.div`
  color: ${({ theme }) => theme.colors.warning};
  font-size: large;
  justify-self: center;
  align-self: center;
`;
