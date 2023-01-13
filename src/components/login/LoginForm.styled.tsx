/* Libraries */
import styled from 'styled-components';

/*Icons*/
import { Github } from '@styled-icons/boxicons-logos';

export const StyledLoginFormWrapper = styled.form`
  display: flex;
  align-self: center;
  flex-direction: column;
  max-width: 500px;
  height: 90%;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const StyledLoginHeader = styled.h1`
  width: 70%;
  font-size: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
  margin: 48px auto 48px auto;
`;

export const StyledButtonGitHub = styled.button`
  display: inline-block;
  height: 40px;
  width: 240px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 6px;
  font-weight: bold;
  position: relative;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 100px;
  border: 1px solid ${({ theme }) => theme.colors.dark};
`;

export const GitHub = styled(Github)`
  height: 30px;
  width: 40px;
  position: absolute;
  cursor: pointer;
  bottom: 13%;
  left: 10px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Span = styled.span`
  text-align: center;
  margin: 20px;
`;

export const LoginErrorWrapper = styled.div`
  margin: 0 auto;
  height: 40px;
  width: 60%;
  background-color: ${({ theme }) => theme.colors.warningBackground};
  position: relative;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.warning};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginError = styled.div`
  color: ${({ theme }) => theme.colors.warning};
`;
