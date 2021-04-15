import React from "react";
import PostIndexContainer from "./posts/post_index/post_index_container";

const Discover = () => {
  return (
    <div className="feed">
      <div className="header">
        <h1>Discover</h1>
        <p>Be one of the first to discover the photos just added to infinitepx.</p>
      </div>

      <PostIndexContainer />
    </div>
  );
};

export default Discover;
