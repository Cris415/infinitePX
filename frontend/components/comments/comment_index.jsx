import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from '../user_profile/user_icon';
import { faComment as farComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CommentIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchPostComments();
  }
  handleDelete(id){
    this.props.deleteComment(id);
  }

  renderComments(){
    return this.props.comments.map(comment => {
    const date = new Date(comment.createdAt).toLocaleDateString();
      return (
        <div key={comment.id} className="comment-item">
          <div className="comment-info-container">
            <UserIcon />
            <div className="comment-user-info">
              <div className="comment-content-item">
                <Link
                  className="comment-username"
                  to={`/users/${comment.authorId}`}
                >
                  {this.props.users[comment.authorId].username}
                </Link>
                <p className="comment-date">{date}</p>
              </div>
              <div className="comment-content-item">
                <p className="comment-content">{comment.comment}</p>
                {this.props.currentUserId === comment.authorId && (
                  <div
                    className="comment-delete"
                    onClick={() => this.handleDelete(comment.id)}
                  >
                    delete
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }).reverse();
  }

  renderEmptyCommentsMessage(){
    if (this.props.comments.length === 0) {
      return (<li className="comment-zero">
        <FontAwesomeIcon icon={farComment} />
        <br />
        No comments yet
      </li> )
    } else {
      return null;
    }

  }

  render(){
    if(!this.props.comments ) return null;
    return(<div>
      <strong>{this.props.comments.length} Comments</strong>
      <ul className="comment-list">
        {this.renderComments()}
        {this.renderEmptyCommentsMessage()}
      </ul>
    </div>
    )

  }

}

export default CommentIndex;