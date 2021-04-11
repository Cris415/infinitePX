import React from 'react';
import { Switch, Route } from 'react-router';

import Logo from './header/logo'
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import UserInfoContainer from './header/user_info_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import PageNotFound from './error/page_not_found.jsx';
import Splash from './splash';
import Feed from './feed';
import PostShowContainer from './posts/post_show/post_show_container';
import PostFormContainer from './posts/post_form/post_form_container';

const App = () => {
  return (
    <div>
      <header>
        <Logo />
        <UserInfoContainer />
      </header>

      <Switch>
        <AuthRoute path="/" exact component={Splash} />
        <ProtectedRoute path="/feed" component={Feed} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/posts/new" exact component={PostFormContainer} />
        <ProtectedRoute path="/posts/:postId" component={PostShowContainer} />

        <PageNotFound />
      </Switch>
    </div>
  );
}



export default App;