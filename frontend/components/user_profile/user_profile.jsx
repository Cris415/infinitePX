import React from 'react';
import PostIndex from '../posts/post_index/post_index';
// should i user post index without container?

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div>
        <div className="header">
          {this.props.user.username}
        </div>
        <PostIndex />
      </div>
    )
  }
}

export default UserProfile;