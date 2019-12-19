import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { checkLoggedIn } from './util/session';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

(async () => renderApp(await checkLoggedIn()))();
