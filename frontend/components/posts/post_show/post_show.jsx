import React from "react";
import { Link, Redirect } from "react-router-dom";
import Spinner from "../../../util/spinner";
import TagIndex from "../../tags/tag_index";
import UserIcon from "../../user_profile/user_icon";
import FollowLinkContainer from "../../follow_button/follow_link_container";
import CommentIndexContainer from "../../comments/comment_index_container";
import CreateCommentContainer from "../../comments/create_comment_container";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleTagSearch = this.handleTagSearch.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.props.post) {
      this.props.fetchPost();
    }
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleTagSearch(tag) {
    return () => {
      const searchTerm = tag;
      this.props.searchPosts(searchTerm);
      this.props.history.push(`/results/${searchTerm}`);
    };
  }

  render() {
    if (!this.props.post) return <div></div>;

    const { title, description, createdAt } = this.props.post;
    const { author, loading, errors, post, currentUserId, tags } = this.props;

    const date = new Date(createdAt);

    if (loading) return <Spinner />;

    return (
      <div className="post-show">
        {errors.length > 0 ? <Redirect to="/" /> : null}

        <div className="img-section">
          <div onClick={this.handleGoBack} className="img-section-back-btn">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <img src={post.photoUrl} alt={title} />
        </div>
        <div className="info-container">
          <div className="img-info">
            <div className="img-info-container">
              <UserIcon />
              <div className="img-info-main">
                <h2>{title}</h2>
                <p className="author">
                  by <Link to={`/users/${author.id}`}> {author.username}</Link>
                  {currentUserId !== author.id && (
                    <span className="img-info-separator">•</span>
                  )}
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
              search={this.handleTagSearch}
              tagType="show"
            />

            {currentUserId === author.id && (
              <Link
                className="edit"
                to={`/posts/${this.props.match.params.postId}/edit`}
              >
                Edit Photo
              </Link>
            )}
          </div>
          <div className="comment-container">
            <CreateCommentContainer />
            <CommentIndexContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default PostShow;
