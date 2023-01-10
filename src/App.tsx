import React from 'react';

/*Libraries*/
import { BrowserRouter as Router } from 'react-router-dom';

/* Routes */
import Routes from 'routes/routes';

/*Wrappers*/
import { ThemeProvider } from 'styled-components';

/*Theme*/
import { theme } from 'theme/ThemeProvider';

/*State management*/
import { Provider } from 'react-redux';
import store from 'store/store';

/*Toasts*/
import { NotificationsToast } from 'components/notifications/NotificationsToast';
import { NotificationsLambdaToast } from 'components/notifications/NotificationsLambaToast';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NotificationsToast />
        <NotificationsLambdaToast />
        <Router>
          <Routes />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
