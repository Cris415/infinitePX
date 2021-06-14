import React from "react";
import DiscoverIndexContainer from "./posts/post_index/discover_index_container";

const Discover = () => {
  return (
    <div className="feed">
      <div className="header">
        <h1>Discover</h1>
        <p>Be one of the first to discover the photos just added to InfinitePx.</p>
      </div>

      <DiscoverIndexContainer />
    </div>
  );
};

export default Discover;
