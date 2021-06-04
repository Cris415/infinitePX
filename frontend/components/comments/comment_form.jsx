import React from "react";
import UserIcon from "../user_profile/user_icon";
import { faComment as farComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.preloadedState;
    this.toggleButtons = this.toggleButtons.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  toggleButtons() {
    this.setState({ showButtons: !this.state.showButtons });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.comment.length > 0) {
      const comment = {
        comment: {
          comment: this.state.comment,
          post_id: this.state.postId,
        },
      };
      this.props.action(comment);
      this.setState({ comment: "" });
    }
  }

  handleCancel() {
    this.setState({ comment: "" });
    this.toggleButtons();
  }

  renderButtons() {
    if (this.state.showButtons || this.state.comment.length > 0) {
      return (
        <div className="comment-btns">
          <div className="" onClick={this.handleCancel}>
            Cancel
          </div>
          <button
            className="btn submit-btn"
            onClick={this.handleSubmit}
            disabled={this.state.comment.length === 0}
          >
            Submit
          </button>
        </div>
      );
    }
  }

  handleInput(e) {
    this.setState({ comment: e.currentTarget.value });
  }

  render() {
    return (
      <form className="comment-form">
        <div className="comment-input-container">
          <UserIcon />
          <div className="comment-form-input" onClick={this.toggleButtons}>
            <FontAwesomeIcon icon={farComment} />
            <input
              type="text"
              onChange={this.handleInput}
              placeholder="Add a commment"
              value={this.state.comment}
            />
          </div>
        </div>
        {this.renderButtons()}
      </form>
    );
  }
}

export default CommentForm;
