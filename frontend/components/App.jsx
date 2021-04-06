import React from 'react';
import { Route } from 'react-router';
import Logo from './header/logo'
import UserInfoContainer from './header/user_info_container';
import login_form_container from './session_forms/login_form_container';
import signup_form_container from './session_forms/signup_form_container';

const App = () => (
  <div>
    <header>
      <Logo />
      <UserInfoContainer />
    </header>

    <Route path="/login" component={login_form_container} />
    <Route path="/signup" component={signup_form_container} />
  </div>
);

export default App;