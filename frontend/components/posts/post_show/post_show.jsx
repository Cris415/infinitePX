import React from "react";
import { Redirect } from "react-router-dom";
import Spinner from "../../../util/spinner";
import ImgInfoContainer from "./img_info_container";
import CommentIndexContainer from "../../comments/comment_index_container";
import CreateCommentContainer from "../../comments/create_comment_container";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleGoBack = this.handleGoBack.bind(this);
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

  render() {
    if (!this.props.post) return <div></div>;
    const { author, loading, errors, post, currentUserId, tags } = this.props;
    if (loading) return <Spinner />;

    return (
      <div className="post-show">
        {errors.length > 0 ? <Redirect to="/" /> : null}

        <div className="img-section">
          <div onClick={this.handleGoBack} className="img-section-back-btn">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <img src={post.photoUrl} alt={post.title} />
        </div>
        <div className="info-container">
          <ImgInfoContainer post={post} author={author} tags={tags} />
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
