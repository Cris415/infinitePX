import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ImagePreview from './image_preview';
import UploadImageInput from './upload_image_input';

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
    fileReader.onloadend = () => {
      let [name, extension] = file.name.split(".");
      extension = extension.toLowerCase();

      // If the extensions don't match the following, state will not be set.
      if ( extension !== "jpg" &&  extension !== "jpeg" ) return;

      this.setState({
        photoFile: file,
        photoUrl: fileReader.result,
        title: name,
      });
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
    if (this.props.formType === 'Upload') {
      formData.append('post[userId]', this.props.currentUser);
    }

    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }

    if (this.props.formType ==='Edit' && this.state.id){
      formData.append("post[postId]", this.state.id);
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

  render(){
    return (
      <div>
        <div className="header-small">
          <h2>{this.props.formType}</h2>
        </div>

        <div className="form-container">
          {(!this.state.photoFile && this.props.formType !== 'Edit') && <UploadImageInput handleFile={this.handleFile} />}

          {<ImagePreview photoUrl={this.state.photoUrl} title={this.state.title} />}

          <form onSubmit={this.handleSubmit} className="post-form">
            <div className="inputs">
              <label>
                Title
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange("title")}
                  required
                />
              </label>

              <label>
                Description
                <textarea
                  value={this.state.description}
                  onChange={this.handleChange("description")}
                  placeholder="e.g. Low angle view of a young bulldog skateboarding near a beach with a striking sunset"
                  required
                />
              </label>
            </div>

            <ul className="errors">
              {this.props.errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>

            <div className="buttons">
              <Link to={this.props.formType === 'Upload' ? "/" : `/posts/${this.props.match.params.postId}`}>Cancel</Link>

              <input
                className="btn submit-btn"
                type="submit"
                value={this.props.formType}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PostForm);