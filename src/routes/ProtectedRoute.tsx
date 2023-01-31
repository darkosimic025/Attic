import React from 'react';

/* Libraries */
import { Navigate } from 'react-router-dom';

/* Paths */
import { paths } from 'paths/paths';
import { useAuth } from 'hooks/useAuth';
import { useAppDispatch } from 'store/store';
import { setCurrentItem } from 'store/table.slice';

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = useAuth();
  if (isLoggedIn === null) return null;
  const dispatch = useAppDispatch();
  dispatch(setCurrentItem(null));
  return isLoggedIn ? children : <Navigate to={paths.SIGNIN} replace={true} />;
};

export default ProtectedRoute;
