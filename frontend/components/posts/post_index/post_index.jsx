import React from 'react';
import PostIndexItem from './post_index_item';
import Spinner from '../../../util/spinner';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    if (this.props.indexType !== "userIndex"){
      this.props.fetchPosts();
    }
  }

  renderItems() {
    const { posts, users, indexType} = this.props
    return posts.map((post) => {
      const author = users[post.userId].username;
      return (
        <PostIndexItem
          key={post.id}
          post={post}
          author={indexType === "userIndex" ? "" : author }
        />
      );
    }).reverse();
  }

  render(){
    if (this.props.loading) return <Spinner />;
    if (this.props.posts.length === 0) return (
      <div className="empty-feed">
        <h1>Welcome to infinitePX! </h1>
        <p>Follow other photographers to get started</p>
      </div>
    );
    return (
      <ul className="post-index">
        {this.renderItems()}
      </ul>
    )
  }

}

export default PostIndex;