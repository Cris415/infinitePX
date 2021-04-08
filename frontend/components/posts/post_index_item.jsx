import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({post}) => {
  return (
    <li>
      <Link to={`/posts/${post.id}` }>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </Link>
    </li>
  )
}

export default PostIndexItem;