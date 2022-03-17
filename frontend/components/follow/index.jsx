import React, { useEffect, useState } from "react";

function Follow(props) {
  let [following, setFollowing] = useState(
    props.currentUser.follows.includes(props.user.id)
  );
  let [followStr, setFollowStr] = useState("Follow");

  useEffect(() => {
    setFollowStr(following ? "Following" : "Follow");
  }, [following]);

  function handleClick() {
    if (following) {
      props.deleteFollow().then(() => {
        setFollowing(false);
        props.fetchUser();
      });
    } else {
      props.createFollow().then(() => {
        setFollowing(true);
        props.fetchUser();
      });
    }
  }

  function handleHover(type) {
    return () => {
      if (following) setFollowStr(type);
    };
  }

  function renderFollow() {
    return props.followType === "inline" ? (
      <span
        className={`link-btn link-btn-${followStr.toLowerCase()}`}
        onClick={handleClick}
        onMouseEnter={handleHover("Unfollow")}
        onMouseLeave={handleHover("Following")}
      >
        {followStr}
      </span>
    ) : (
      <button
        className={`btn btn-${followStr.toLowerCase()}`}
        onClick={handleClick}
        onMouseEnter={handleHover("Unfollow")}
        onMouseLeave={handleHover("Following")}
      >
        {followStr}
      </button>
    );
  }

  // Return null if the user is viewing their own page
  if (props.currentUser.id === props.user.id) return null;
  return <> {renderFollow()} </>;
}

export default Follow;
