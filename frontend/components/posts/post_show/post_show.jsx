import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../../../util/spinner';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentIndexContainer from "../../comments/comment_index_container";
import CreateCommentContainer from '../../comments/create_comment_container';
import TagIndex from '../../tags/tag_index';

class PostShow extends React.Component {
  constructor(props){
    super(props);

    this.handleGoBack = this.handleGoBack.bind(this);
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.fetchPost();
  }

  handleGoBack(){
    this.props.history.goBack()
  }

  render(){
    if (!this.props.post ) return <div></div>;

    const { title, description, createdAt } = this.props.post;
    const {author} = this.props;
    const date = new Date(createdAt);

    if (this.props.loading) return <Spinner />;

    return (
      <div className="post-show">
        {this.props.errors.length > 0 ? <Redirect to="/" /> : null}

        <div className="img-section">
          <div onClick={this.handleGoBack} className="img-section-back-btn">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <img src={this.props.post.photoUrl} alt={title} />
        </div>
        <div className="info-container">
          <div className="img-info">
            <div className="img-info-main">
              <h2>{title}</h2>
              <p className="author">
                by <Link to={`/users/${author.id}`}> {author.username}</Link>
              </p>
            </div>

            <div className="date-info">
              <strong>Uploaded: </strong>
              <span> {date.toLocaleDateString()} </span>
            </div>
            <p className="description"> {description} </p>

            <TagIndex tags={this.props.tags} />

            {this.props.currentUserId === author.id && (
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