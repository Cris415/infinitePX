import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../user_profile/user_icon";
import FollowLinkContainer from "../../follow/follow_link_container";
import PostShowTagIndex from "../../tags/show_tag_index";
import { connect } from "react-redux";
import { postAuthorSelector } from "../../../selectors/post_author_selector";

const ImgInfo = (props) => {
  const { title, description, createdAt, id } = props.post;
  const { author } = props;
  
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

      <PostShowTagIndex />

      {authorIsUser && (
        <Link className="edit" to={`/posts/${id}/edit`}>
          Edit Photo
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  author: postAuthorSelector(state, ownProps.post.id),
  currentUserId: state.session.id,
});

export default connect(mapStateToProps)(ImgInfo);
