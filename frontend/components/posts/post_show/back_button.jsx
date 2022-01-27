import React from "react";
import { withRouter } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackButton = (props) => {
  const handleGoBack = () => {
    props.history.goBack();
  };
  return (
    <div onClick={handleGoBack} className="img-section-back-btn">
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

export default withRouter(BackButton);
