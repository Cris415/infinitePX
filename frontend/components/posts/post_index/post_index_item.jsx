import React from "react";
import { Link } from "react-router-dom";

const PostIndexItem = ({ post, author, small, loading }) => {
  return (
    <li className={`index-item ${small ? "item-small" : ""}`}>
      <p
        className={`index-item-heading index-item-${
          !!author ? "top" : "bottom"
        }`}
      >
        {post.title}
      </p>

      <Link className="index-item-image-link" to={`/posts/${post.id}`}>
        <img src={post.photoUrl} alt={post.title} loading={loading} />
      </Link>

      {!!author && (
        <Link
          className="index-item-heading index-item-bottom"
          to={`/users/${post.userId}`}
        >
          <p>{author}</p>
        </Link>
      )}
    </li>
  );
};

export default PostIndexItem;
