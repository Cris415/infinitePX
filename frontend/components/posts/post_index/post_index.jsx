import React from 'react';
import PostIndexItem from './post_index_item';
import Spinner from '../../../util/spinner';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
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
    });
  }

  render(){
    if (this.props.loading) return <Spinner />;
    return (
      <ul className="post-index">
        {this.renderItems()}
      </ul>
    )
  }

}

export default PostIndex;