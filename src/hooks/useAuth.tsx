import { useEffect, useState } from 'react';

/*Hooks*/
import { useAppDispatch } from 'store/store';

/*Services*/
import { getUserData } from 'store/user.actions';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState<null | boolean>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserData())
      .unwrap()
      .then(() => {
        setIsAuth(true);
      })
      .catch(() => {
        setIsAuth(false);
      });
  }, []);

  return isAuth;
};
