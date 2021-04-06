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
        <li>
          <Link to="/login">Log in</Link>
        </li>,
        <li>
          <Link to="/signup" className="button">
            Signup
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