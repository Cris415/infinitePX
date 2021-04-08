import React from 'react';
import { withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    const post = Object.assign({}, this.state);
    post.userId = this.props.currentUser;
   
    this.props.processForm(post, (postId) => this.props.history.push(`/posts/${postId}`))
  }

  handleChange(label){
    return (e) => {
      this.setState({ [label] : e.currentTarget.value })
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.formType}</h2>

        <label>
          Title
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
        </label>

        <label>
          Description
          <textarea
            value={this.state.description}
            onChange={this.handleChange("description")}
          />
        </label>

        <div className="errors">
          <ul>{this.props.errors.map((err, i) => <li key={i}>{err}</li>  )}</ul>
        </div>

        <input type="submit" value={this.props.formType} />
      </form>
    );
  }
}

export default withRouter(PostForm);