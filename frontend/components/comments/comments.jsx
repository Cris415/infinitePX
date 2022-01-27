import React from "react";
import CommentIndexContainer from "./comment_index_container";
import CreateCommentContainer from "./create_comment_container";

const Comments = () => {
  return (
    <div className="comment-container">
      <CreateCommentContainer />
      <CommentIndexContainer />
    </div>
  );
};

export default Comments;
