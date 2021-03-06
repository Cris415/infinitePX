import React from "react";
import { Switch } from "react-router";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

import MainHeader from "./header/main_header";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import PostShowContainer from "./posts/post_show/post_show_container";
import UploadPostFormContainer from "./posts/post_form/upload_post_form_container";
import EditPostForm from "./posts/post_form/edit_post_form_container";
import UserProfileContainer from "./user_profile/user_profile_container";

import PageNotFound from "./error/page_not_found.jsx";
import SearchResults from "./search/SearchResults";
import Splash from "./splash";
import Feed from "./feeds/feed";
import Discover from "./feeds/discover";
import Footer from "./footer";

const App = () => {
  return (
    <div className="app">
      <MainHeader />

      <main className="content">
        <Switch>
          <AuthRoute path="/" exact component={Splash} />
          <ProtectedRoute path="/feed" component={Feed} />
          <ProtectedRoute path="/discover" component={Discover} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <ProtectedRoute
            path="/posts/new"
            exact
            component={UploadPostFormContainer}
          />
          <ProtectedRoute
            path="/posts/:postId"
            exact
            component={PostShowContainer}
          />
          <ProtectedRoute path="/posts/:postId/edit" component={EditPostForm} />
          <ProtectedRoute
            path="/users/:userId"
            component={UserProfileContainer}
          />
          <ProtectedRoute path="/results" component={SearchResults} />

          <PageNotFound />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
