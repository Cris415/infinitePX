import React from 'react';
import { Link } from 'react-router-dom';
import {  faUser } from "@fortawesome/free-solid-svg-icons";
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
            <div className="comment-img">
              <FontAwesomeIcon icon={faUser} />
            </div>
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
    })
  }

  render(){
    if(!this.props.comments ) return null;
    return(
      <ul className="comment-list">
        {this.renderComments()}
      </ul>
    )

  }

}

export default CommentIndex;