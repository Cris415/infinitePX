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
    const {currentUser} = this.props;
    return (
      <div className="header-links">
        {currentUser && (
          <Link className="header-discover header-link" to="/discover">
            Discover
          </Link>
        )}

        <div className="header-link-cluster">
          {currentUser && <SearchContainer />}

          {currentUser && (
            <div className="dropdown">
              <UserIcon />
              <ul className="dropdown-list">
                <li key="profile">
                  <Link to={`/users/${currentUser.id}`}>Profile</Link>
                </li>
                <li key="logout" className="logout">
                  <a onClick={this.handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          )}

          {!currentUser && (
            <div className="header-auth-btns">
              <Link to="/login">Log in</Link>
              <Link to="/signup" className="btn link-btn">
                Sign up
              </Link>
            </div>
          )}

          {currentUser && (
            <Link to="/posts/new" className="btn-upload btn btn-medium">
              <FontAwesomeIcon icon={faArrowUp} /> Upload
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default HeaderLinks;