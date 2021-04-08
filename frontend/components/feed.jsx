import React from "react";
import PostIndexContainer from './posts/post_index_container';

const Feed = () => {
  return (
    <div className="feed" >
      <h1>Home Feed</h1>
      <p>See photos from other photographers</p>

      <PostIndexContainer />
    </div>
  );
};

export default Feed;