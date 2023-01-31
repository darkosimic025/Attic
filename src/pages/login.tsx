import React from 'react';

/*Components*/
import LoginForm from 'components/login/LoginForm';

/*Styled components*/
import { LoginLayout } from 'components/login/Login.styled';

export const Login = () => (
  <LoginLayout>
    <LoginForm />
  </LoginLayout>
);
