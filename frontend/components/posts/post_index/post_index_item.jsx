import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({post, author}) => {
  return (
    <li className="post-index-item">
      <Link to={`/posts/${post.id}`}>
        <img src={post.photoUrl} alt={post.title} />
        <div className="img-info">
          <h2>{post.title}</h2>
          <p>{author}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostIndexItem;