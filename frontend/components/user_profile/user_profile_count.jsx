import React from "react";

export default function UserProfileCount({ user }) {
  return (
    <div className="user-profile-count">
      <span>
        {user.followersCount} <strong>Followers</strong>
      </span>
      <span>
        {user.follows.length} <strong>Following</strong>
      </span>
    </div>
  );
}
