import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import AuthPage from '../src/pages/AuthPage';
import ResetPassword from '../src/pages/ResetPassword';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard';
import requiredSessionAuthentication from './HOC';
import { AuthRoute, ProtectedRoute } from './util/route';
import SecondPage from './components/SecondPage';

export default () => (
  <>
    <Route exact path="/" component={Home} />
    <AuthRoute path="/login-signup" component={AuthPage} />
    <AuthRoute path="/login" component={Login} />
    <AuthRoute path="/signup" component={Signup} />
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
);
