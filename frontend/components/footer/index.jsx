import React from "react";

const AnchorTag = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <AnchorTag link="https://github.com/Cris415/infinitePX">
        <span className="footer-logo">InfinitePx</span>
      </AnchorTag>
      <AnchorTag link="https://github.com/Cris415">
        <img src={window.github_logo} alt="github-img" />
      </AnchorTag>
      <AnchorTag link="https://www.linkedin.com/in/cristian-reynoso-31b4168b/">
        <img src={window.linkedin_logo} alt="linked-img" />
      </AnchorTag>
      <AnchorTag link="https://angel.co/u/cristian-reynoso-1">
        <img src={window.angellist_logo} alt="linked-img" />
      </AnchorTag>
      <AnchorTag link="https://www.cristianreynoso.com">Portfolio</AnchorTag>
    </footer>
  );
};

export default Footer;
