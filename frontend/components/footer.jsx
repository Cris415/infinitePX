import React from 'react';  

const Footer = () => {
  return (
    <footer className="footer">
      InfinitePx
      <a href="https://github.com/Cris415/infinitePX" target="_blank">
        github
      </a>
      <a href="https://github.com/Cris415" target="_blank" rel="noreferrer">
        , Cristian:{" "}
      </a>
      <div>
        <a href="https://github.com/Cris415" target="_blank" rel="noreferrer">
          <img src="GitHub-Mark-Light-64px.png" alt="github-img" />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-reynoso-31b4168b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="linkedin.png" alt="linked-img" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;