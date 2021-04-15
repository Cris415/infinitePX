import React from "react";
import FeedIndexContainer from './posts/post_index/feed_index_container';

const Feed = () => {
  return (
    <div className="feed" >
      <div className="header">
        <h1>Home Feed</h1>
        <p>See photos from photographers you follow</p>
      </div>

      <FeedIndexContainer />
    </div>
  );
};

export default Feed;