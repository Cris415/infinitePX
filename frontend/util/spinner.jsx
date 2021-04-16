import React from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => {
  return (
    <div className="spinner">
      <FontAwesomeIcon className="fa-spin" icon={faSpinner} />
    </div>
  );
}

export default Spinner;