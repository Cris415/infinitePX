import React from 'react';

const PostIndexItem = (props) => {
  return (
    <li>
      <h2>{props.post.title}</h2>
      <p>{props.post.description}</p>
    </li>
  )
}

export default PostIndexItem;