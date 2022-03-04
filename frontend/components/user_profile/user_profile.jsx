import React, { useEffect } from "react";
import PostIndex from "../posts/post_index/post_index";
import UserIcon from "./user_icon";

import FollowButtonContainer from "../follow_button/follow_button_container";

function UserProfile(props) {
  const { user, posts, currentUserId, fetchUserPosts, fetchUser } = props;

  useEffect(() => {
    fetchUserPosts();
    fetchUser();
  }, []);

  if (!user) return null;
  const userForPostIndex = { [user.id]: user };
  return (
    <div className="user-profile">
      <div className="header user-profile-header">
        <UserIcon size="large" />
        <h3 className="user-profile-username">{user.username}</h3>
        <FollowButtonContainer user={user} />
        <div className="user-profile-count">
          <span>
            {user.followersCount} <strong>Followers</strong>
          </span>
          <span>
            {user.follows.length} <strong>Following</strong>
          </span>
        </div>
      </div>
      
      <PostIndex
        posts={posts}
        users={userForPostIndex}
        indexType="userIndex"
        currentUserId={currentUserId}
      />
    </div>
  );
}

export default UserProfile;
