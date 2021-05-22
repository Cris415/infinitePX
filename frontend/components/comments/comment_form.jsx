import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.preloadedState;
    this.toggleButtons = this.toggleButtons.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleButtons() {
    this.setState({ showButtons: !this.state.showButtons });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.comment.length > 0){
      const comment = { "comment": {
        comment: this.state.comment,
        post_id: this.state.postId
      }};
      this.props.action(comment);
      this.setState({comment: ''});
    }
  }

  renderButtons() {
    return (
      <div className="comment-btns">
        <div className="" onClick={this.toggleButtons}>
          Cancel
        </div>
        <button className="btn submit-btn" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }

  handleInput(e) {
    this.setState({ comment: e.currentTarget.value });
  }

  render() {
    return (
      <form action="" className="comment-form" onClick={this.toggleButtons}>
        <input
          className="comment-form-input"
          type="text"
          name=""
          id=""
          onChange={this.handleInput}
          placeholder="Add a commment"
          value={this.state.comment}
        />
        {this.state.showButtons && this.renderButtons()}
      </form>
    );
  }
}

export default CommentForm;