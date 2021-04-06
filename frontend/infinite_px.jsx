import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

import * as sessionActions from './actions/session_actions';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  
  let store;
  if (window.currentUser){
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    }

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  // Testing
  window.login = sessionActions.login;
  window.logout = sessionActions.logout;
  window.signup = sessionActions.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing

  ReactDOM.render(<Root store={store} /> , document.getElementById('root'))
});