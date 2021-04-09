import React from 'react';
import { withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.post;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    
    fileReader.onloadend = ()=>{
      this.setState({ photoFile: file,  photoUrl: fileReader.result })
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append('post[title]', this.state.title);
    formData.append('post[description]', this.state.description);
    formData.append('post[userId]', this.props.currentUser);

    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
   
    this.props.processForm(formData, (postId) =>
      this.props.history.push(`/posts/${postId}`)
    );
  }

  handleChange(label){
    return (e) => {
      this.setState({ [label] : e.currentTarget.value })
    }
  }

  renderPreview(){
    return this.state.photoUrl ? (
      <div className="image-preview">
        <h3>Image Preview</h3>
        <img src={this.state.photoUrl} />
      </div>
    ) : null;
  }

  render(){

    return (
      <form onSubmit={this.handleSubmit} className="post-form">
        <h2>{this.props.formType}</h2>

        <label>
          Upload Image
          <input type="file" onChange={this.handleFile} />
        </label>

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
          <ul>
            {this.props.errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>

        { this.renderPreview()}

        <input
          type="submit"
          value={this.props.formType}
          accept="image/png, image/jpeg"
        />
      </form>
    );
  }
}

export default withRouter(PostForm);