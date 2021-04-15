import React from 'react';
import PostIndex from '../posts/post_index/post_index';

import FollowButtonContainer from '../follow_button/follow_button_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserPosts();
  }

  render(){
    if (!this.props.user && this.props.posts) return null;
    const user = {[this.props.user.id]: this.props.user }
    return (
      <div className="user-profile">
        <div className="header user-profile-header">
          {this.props.user.username}

          <FollowButtonContainer user={this.props.user}/>
          
        </div>
        <PostIndex
          posts={this.props.posts}
          users={user}
          indexType="userIndex"
        />
      </div>
    );
  }
}

export default UserProfile;