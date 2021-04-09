import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({post , author}) => {
  return (
    <li>
      <Link to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{author}</p>
      </Link>
    </li>
  )
}

export default PostIndexItem;