import React from 'react';
import PostIndexItem from './post_index_item';
import Spinner from '../../../util/spinner';
import {Link} from 'react-router-dom';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    if (this.props.indexType === undefined){
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

  renderNoPosts(){
    if (this.props.indexType === 'userIndex') {
      return (
        <div>
          <h1>Welcome to infinitePX! </h1>
          {this.props.currentUserId === +Object.keys(this.props.users)[0] ? (
            <p>
              <Link to="/posts/new">Upload</Link> a photo to get started!
            </p>
          ) : (
            <p>This user has not uploaded a photo!</p>
          )}
        </div>
      );
    } else if (this.props.indexType === 'searchIndex') {
      return (
        <div>
          <p>No results for {this.props.searchTerm}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome to infinitePX! </h1>
          <p>
            Checkout and follow other photographers on the{' '}
            <Link to="/discover">Discover</Link> page to get started!
          </p>
        </div>
      );
    }
  }

  render(){
    if (this.props.loading) return <Spinner />;
    if (this.props.posts.length === 0) return (
      <div className="empty-feed">
        {this.renderNoPosts()}
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