import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({post, author}) => {
  return (
    <li className="index-item">
      <p className="index-item-heading index-item-top">{post.title}</p>

      <Link className="index-item-image-link" to={`/posts/${post.id}`}>
        <img src={post.photoUrl} alt={post.title} />
      </Link>

      <Link
        className="index-item-heading index-item-bottom"
        to={`/users/${post.userId}`}
      >
        <p>{author}</p>
      </Link>
    </li>
  );
}

export default PostIndexItem;