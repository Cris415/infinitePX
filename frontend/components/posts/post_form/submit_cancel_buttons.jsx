import React from "react";
import { Link } from "react-router-dom";

const SubmitCancelButtons = (props) => {
  const { formType, edited, postId } = props;
  const linkRoute = formType === "Upload" ? "/" : `/posts/${postId}`;
  const submitBtnName = formType === "Edit" ? "Save changes" : formType;

  if ((formType === "Edit" && edited) || formType === "Upload") {
    return (
      <div className="buttons">
        <Link to={linkRoute}>Cancel</Link>
        <input className="btn submit-btn" type="submit" value={submitBtnName} />
      </div>
    );
  } else {
    return null;
  }
};

export default SubmitCancelButtons;
