import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/Cris415/infinitePX"
        target="_blank"
        rel="noreferrer"
      >
        <span className="footer-logo">InfinitePx</span>
      </a>
      <div className='footer-links'>
        <a href="https://github.com/Cris415" target="_blank" rel="noreferrer">
          <img src={window.github_logo} alt="github-img" />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-reynoso-31b4168b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={window.linkedin_logo} alt="linked-img" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
