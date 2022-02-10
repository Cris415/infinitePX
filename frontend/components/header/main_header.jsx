import React from "react";
import Logo from "./logo";
import HeaderLinks from "./header_links";

const MainHeader = () => {
  return (
    <header className="main-header">
      <Logo />
      <HeaderLinks />
    </header>
  );
};

export default MainHeader;
