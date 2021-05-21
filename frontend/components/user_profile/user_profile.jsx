import React from 'react';
import PostIndex from '../posts/post_index/post_index';

import FollowButtonContainer from '../follow_button/follow_button_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserPosts();
    this.props.fetchUser();
  }

  render(){
    // if (!this.props.user && this.props.posts) return null;
    if (!this.props.user ) return null;
    const user = {[this.props.user.id]: this.props.user }
    return (
      <div className="user-profile">
        <div className="header user-profile-header">
          {this.props.user.username}
          <div className="user-profile-count">Followers: {this.props.user.followersCount}</div>
          <FollowButtonContainer user={this.props.user} />
        </div>
          <PostIndex
            posts={this.props.posts}
            users={user}
            indexType="userIndex"
            currentUserId={this.props.currentUserId}
          />
      </div>
    );
  }
}

export default UserProfile;