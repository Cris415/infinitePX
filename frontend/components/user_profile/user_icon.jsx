import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserIcon(props) {
  
  return (
    <div className={`user-icon ${this.props.size}`}  >
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
}

export default UserIcon;
