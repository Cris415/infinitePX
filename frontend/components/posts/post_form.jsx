import React from 'react';
import { Redirect, withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const post = Object.assign({}, this.state);
    post.user_id = this.props.currentUser;
   
    this.props.processForm(post).then(() => {
      this.setState({ title: "", description: "" });
      this.props.history.push("/feed");
      return <Redirect to="feed" />;
    });
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

        <label>Title
          <input type="text" 
          value={this.state.title} 
          onChange={this.handleChange('title')}  />
        </label>

        <label>Description
          <textarea 
            value={this.state.description} 
            onChange={this.handleChange('description')} />
        </label>

        <input type="submit" value={this.props.formType} />
      </form>
    )
  }
}

export default withRouter(PostForm);