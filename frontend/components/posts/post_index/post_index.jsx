import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }
  renderItems() {
    return this.props.posts.map((post) => {
      const author = this.props.users[post.userId].username;
      return (
        <PostIndexItem key={post.id} post={post} author={author} />
      );
    });
  }

  render(){
    return (
      <ul className="post-index">
        {this.renderItems()}
      </ul>
    )
  }

}

export default PostIndex;