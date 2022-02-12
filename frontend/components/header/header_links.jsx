import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchContainer from "../search/SearchContainer";

import {
  faArrowUp,
  faHome,
  faPlusCircle,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserDropdown from "./user_dropdown";

const HeaderLinks = (props) => {
  return props.currentUser ? (
    <>
      <Link className="main-header-link btn-discover" to="/discover">
        <FontAwesomeIcon icon={faCompass} className="main-header-link-icon" />
        Discover
      </Link>
      <Link className="main-header-link btn-home" to="/">
        <FontAwesomeIcon icon={faHome} className="main-header-link-icon" />
        Home
      </Link>
      <SearchContainer />
      <UserDropdown userId={props.currentUser.id} />

      <Link to="/posts/new" className="btn-upload btn btn-medium">
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="main-header-link-icon"
        />
        <FontAwesomeIcon icon={faArrowUp} className="btn-upload-large" />
        <span className="btn-upload-label">Upload</span>
      </Link>
    </>
  ) : (
    <div className="main-header-auth-btns">
      <Link to="/login">Log in</Link>
      <Link to="/signup" className="btn link-btn">
        Sign up
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

export default connect(mapStateToProps)(HeaderLinks);
