import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserIcon(props) {
  const size = props.size || '';
  return (
    <div className={`user-icon ${size}`}  >
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
}

export default UserIcon;
