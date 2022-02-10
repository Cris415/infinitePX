import React from "react";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import UserIcon from "../user_profile/user_icon";
import { Link } from "react-router-dom";

const UserDropDown = (props) => {
  function handleLogout(e) {
    e.preventDefault();
    props.logout();
  }
  return (
    <div className="dropdown">
      <UserIcon size="small" />
      <ul className="dropdown-list">
        <li key="profile">
          <Link to={`/users/${props.userId}`}>Profile</Link>
        </li>
        <li key="logout" className="logout">
          <a onClick={handleLogout}>Logout</a>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(UserDropDown);
