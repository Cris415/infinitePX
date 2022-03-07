import React, { useEffect, useState } from "react";

function Follow(props) {
  const [following, setFollowing] = useState(
    props.currentUser.follows.includes(props.user.id)
  );

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
      if (following) {
        this.setState({ followStr: type });
      }
    };
  }

  function renderFollow() {
    const { followStr } = this.state;
    if (this.props.followType === "inline") {
      return (
        <span
          className={`link-btn link-btn-${followStr.toLowerCase()}`}
          onClick={this.handleClick}
          onMouseEnter={this.handleHover("Unfollow")}
          onMouseLeave={this.handleHover("Following")}
        >
          {followStr}
        </span>
      );
    } else {
      return (
        <button
          className={`btn btn-${followStr.toLowerCase()}`}
          onClick={this.handleClick}
          onMouseEnter={this.handleHover("Unfollow")}
          onMouseLeave={this.handleHover("Following")}
        >
          {followStr}
        </button>
      );
    }
  }

  // Return null if the user is viewing their own page
  if (props.currentUser.id === props.user.id) return null;
  return <> {renderFollow()} </>;
}

export default Follow;
