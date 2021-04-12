import React from "react";
import PostIndexContainer from './posts/post_index/post_index_container';

const Feed = () => {
  return (
    <div className="feed" >
      <div className="header">
        <h1>Home Feed</h1>
        <p>See photos from other photographers</p>
      </div>

      <PostIndexContainer />
    </div>
  );
};

export default Feed;