import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostIndexItem = ({ post, author, small }) => {
  const [loading, setLoading] = useState(true);

  function imageLoaded(e){
    console.log(e)
    setLoading(false)
  }

  return (
    <li className={`index-item ${small ? "item-small" : ""}`}>
      <p
        className={`index-item-heading index-item-${
          !!author ? "top" : "bottom"
        }`}
      >
        {post.title}
      </p>

        <div className="index-item-loading" style={{display: loading ? "block" : "none"}}>
        </div>
      <Link className="index-item-image-link" to={`/posts/${post.id}`} style={{display: loading ? "none" : "block"}}>
        <img src={post.photoUrl} alt={post.title} onLoad={imageLoaded} />
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
