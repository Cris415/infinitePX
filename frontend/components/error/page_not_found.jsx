import React from 'react';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageNotFound = () => {
  return (
    <div className="page_not_found">
      <div className="message">
        <FontAwesomeIcon icon={faTimesCircle} />
        <h1>This page is no longer available</h1>
      </div>
    </div>
  );
}


export default PageNotFound;