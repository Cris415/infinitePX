import React from 'react';
import { Switch, Route } from 'react-router';

import Logo from './header/logo'
import { AuthRoute } from "../util/route_util";

import UserInfoContainer from './header/user_info_container';
import login_form_container from './session_forms/login_form_container';
import signup_form_container from './session_forms/signup_form_container';
import PageNotFound from './error/page_not_found.jsx';
import Splash from './splash';

const App = () => (
  <div>
    <header>
      <Logo />
      <UserInfoContainer />
    </header>

    <Switch>
      <Route path="/" exact component={Splash} />
      <AuthRoute path="/login" component={login_form_container} />
      <AuthRoute path="/signup" component={signup_form_container} />
      <PageNotFound />
    </Switch>
  </div>
);

export default App;