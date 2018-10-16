import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';
import Login from './screens/Login';

export default () => (
  <Provider store={store}>
      <AlertProvider>
          <Navigator onNavigationStateChange={null} />
      </AlertProvider>
  </Provider>
);

// export default () => <Login />;