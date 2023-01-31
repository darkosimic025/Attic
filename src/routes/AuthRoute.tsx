import React from 'react';

/* Libraries */
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

/* Paths */
import { paths } from 'paths/paths';

type AuthRouteProps = {
  children: JSX.Element;
};

const AuthRoute = ({ children }: AuthRouteProps) => {
  const isLoggedIn = useSelector<RootState, boolean>((state) => state.user.isLoggedIn);
  return isLoggedIn ? <Navigate to={paths.STORAGE} replace={true} /> : children;
};

// For now, it will remain like this, if there is a need, we will change it.

export default AuthRoute;
