import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from '../src/pages/Home';
import AuthPage from '../src/pages/AuthPage';
import ResetPassword from '../src/pages/ResetPassword';
import Dashboard from './components/Dashboard';
import requiredSessionAuthentication from './HOC';
import { AuthRoute, ProtectedRoute } from './util/route';
import SecondPage from './components/SecondPage';
import configureStore from './store/store';
import { Provider } from 'react-redux';

const App = preloadedState => {
  const store = configureStore(preloadedState);
  window.state = store.getState;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Route exact path="/" component={Home} />
          <AuthRoute path="/login-signup" component={AuthPage} />
          <AuthRoute path="/resetpassword/:token" component={ResetPassword} />
          <ProtectedRoute
            path="/dashboard"
            component={requiredSessionAuthentication(Dashboard)}
          />
          <ProtectedRoute
            path="/second-page"
            component={requiredSessionAuthentication(SecondPage)}
          />
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
