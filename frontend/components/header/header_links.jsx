import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer  from '../search/SearchContainer';
import UserIcon from '../user_profile/user_icon';

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class HeaderLinks extends React.Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render(){
    return (
      <div>
        <SearchContainer />
        <Link className="header-link" to="/discover">
          Discover
        </Link>
        <div className="dropdown">
          <UserIcon />
          <ul className="dropdown-list">
            <li key="profile">
              <Link to={`/users/${this.props.currentUser.id}`}>Profile</Link>
            </li>
            <li key="logout" className="logout"></li>
          </ul>
        </div>
        { this.props.currentUser && (
          <div className="auth-btns">
            <Link to="/login">Log in</Link>
            <Link to="/signup" className="btn link-btn">
              Sign up
            </Link>
          </div>
        )}

        <Link to="/posts/new" className="btn-upload btn btn-medium">
          <FontAwesomeIcon icon={faArrowUp} /> Upload
        </Link>
      </div>
    );
  }
}

export default HeaderLinks;