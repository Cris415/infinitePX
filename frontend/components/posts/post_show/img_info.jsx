import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../user_profile/user_icon";
import FollowLinkContainer from "../../follow_button/follow_link_container";
import { useHistory } from "react-router";
import TagIndex from "../../tags/tag_index";

const ImgInfo = (props) => {
  const handleTagSearch = (tag) => {
    const history = useHistory();
    return () => {
      const searchTerm = tag;
      props.searchPosts(searchTerm);
      history.push(`/results/${searchTerm}`);
    };
  };

  const { title, description, createdAt, id } = props.post;
  const { author, tags } = props;
  const authorIsUser = props.currentUserId === author.id;
  const date = new Date(createdAt);

  return (
    <div className="img-info">
      <div className="img-info-content">
        <UserIcon />
        <div className="img-info-main">
          <h2>{title}</h2>
          <p className="author">
            by <Link to={`/users/${author.id}`}> {author.username}</Link>
            {!authorIsUser && <span className="img-info-separator">•</span>}
            <FollowLinkContainer user={author} />
          </p>
        </div>
      </div>

      <div className="date-info">
        <strong>Uploaded: </strong>
        <span> {date.toLocaleDateString()} </span>
      </div>
      <p className="description"> {description} </p>

      <TagIndex
        tags={tags.map((tag) => tag.name)}
        search={handleTagSearch}
        tagType="show"
      />

      {authorIsUser && (
        <Link className="edit" to={`/posts/${id}/edit`}>
          Edit Photo
        </Link>
      )}
    </div>
  );
};

export default ImgInfo;
