import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = props => {
  const handleLogout = (e) => {
    e.preventDefault();
    props.logout();
  }

  const renderInfo = () =>
    props.currentUser ? (
      <li>
        <a onClick={handleLogout}>Logout</a>{" "}
      </li>
    ) : (
      [
        <li key="login">
          <Link to="/login">Log in</Link>
        </li>,
        <li key="signup">
          <Link to="/signup" className="button">
            Sign up
          </Link>
        </li>,
      ]
    );

  return (
    <div>
      <ul className="auth-btns">{renderInfo()}</ul>
    </div>
  );
}

export default UserInfo;