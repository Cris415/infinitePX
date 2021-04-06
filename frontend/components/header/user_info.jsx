import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = props => {
  const handleLogout = () => {
    props.logout();
  }

  const renderInfo = () =>
    props.currentUser ? (
      <button onClick={handleLogout} >Logout</button>
    ) : (
      <ul className="auth-btns">
        <Link to="/login" >Log in</Link>
        <Link to="/signup" className="button">Signup</Link>
      </ul>
    );

  return ( <div>
  { renderInfo() }
    </div> )
}

export default UserInfo;