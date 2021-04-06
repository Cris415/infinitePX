import React from 'react';
import ReactDOM from 'react-dom';

import * as sessionActions from './actions/session_actions';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // Testing
  window.login = sessionActions.login;
  window.logout = sessionActions.logout;
  window.signup = sessionActions.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing

  ReactDOM.render(<h1>Welcome to InfinitePX</h1>, document.getElementById('root'))
});