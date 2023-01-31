/*Librarires*/
import { configureStore } from '@reduxjs/toolkit';

/*Hooks*/
import { useDispatch } from 'react-redux';

/*Slices*/
import notificationsSlice from './notifications.slice';
import tableSlice from './table.slice';
import userSlice from './user.slice';

/*Middleware*/
import signalrMiddleWare from './signalR.middleware';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(signalrMiddleWare),

  reducer: {
    user: userSlice,
    table: tableSlice,
    notifications: notificationsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
