import React from 'react';
import PostIndex from '../posts/post_index/post_index';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserPosts();
  }

  render(){
    if (!this.props.user && this.props.posts) return null;
    const users = {[this.props.user.id]: this.props.user }
    return (
      <div>
        <div className="header">
          {this.props.user.username}
        </div>
        <PostIndex posts={this.props.posts} users={users} type="userIndex" />
      </div>
    )
  }
}

export default UserProfile;