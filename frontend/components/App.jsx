import React from 'react';
import Logo from './header/logo'
import UserInfoContainer from './header/user_info_container';

const App = () => (
  <div>
    <header>
      <Logo />
      <UserInfoContainer />
    </header>
  </div>
);

export default App;