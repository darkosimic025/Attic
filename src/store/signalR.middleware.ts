/*Libraries*/
import { HubConnectionBuilder, LogLevel, HttpTransportType } from '@microsoft/signalr';
import { Action, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

/*Actions*/
import { getNotifications } from './notifications.actions';
import { onLambdaNotification, onNotification } from './notifications.slice';

export const hubConnection = new HubConnectionBuilder()
  .withUrl(process.env.REACT_APP_API_ENDPOINT_NOTIFICATIONS as string, {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets,
  })
  .configureLogging(LogLevel.Information)
  .withAutomaticReconnect()
  .build();

hubConnection.start();

const signalrMiddleWare: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next) =>
  async <A extends Action>(action: A) => {
    hubConnection.on('ReceiveMessage', (_, notification) => {
      //I leaved here any because of redux-thunk types error for Middleware
      dispatch(getNotifications() as any);
      dispatch(onNotification(notification));
    });
    hubConnection.on('LambdaMessage', (_, notification) => {
      dispatch(onLambdaNotification(notification));
    });

    next(action);
  };
export default signalrMiddleWare;
