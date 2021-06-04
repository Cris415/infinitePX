import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer  from '../search/SearchContainer';
import UserIcon from '../user_profile/user_icon';

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class UserInfo extends React.Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  renderInfo() {
   return this.props.currentUser
     ? [
         <li key="search">
           <SearchContainer />
         </li>,
         <li key="discover">
           <Link className="header-link" to="/discover">
             Discover
           </Link>
         </li>,
         <li key="dropdown" className="dropdown">
           <UserIcon />
           <ul className="dropdown-list">
             <li key="profile">
               <Link to={`/users/${this.props.currentUser.id}`}>Profile</Link>
             </li>
             <li key="logout" className="logout">
               <a onClick={this.handleLogout}>Logout</a>
             </li>
           </ul>
         </li>,
         <li key="createPost">
           <Link to="/posts/new" className="btn-upload btn btn-medium">
             <FontAwesomeIcon icon={faArrowUp} /> Upload
           </Link>
         </li>,
       ]
     : [
         <li key="login">
           <Link to="/login">Log in</Link>
         </li>,
         <li key="signup">
           <Link to="/signup" className="btn link-btn">
             Sign up
           </Link>
         </li>,
       ];
  }
  render(){
    return (
      <ul className="auth-btns">{this.renderInfo()}</ul>
    )
  }
}

export default UserInfo;