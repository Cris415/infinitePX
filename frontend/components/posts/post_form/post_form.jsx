import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ImagePreview from './image_preview';
import UploadImageInput from './upload_image_input';
import TagFormContainer from '../../tags/tag_form_container';

class PostForm extends React.Component {
  constructor(props){
    super(props);

    this.props.post.edited = false;
    this.state = this.props.post;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  componentDidMount(){
    window.scrollTo(0, 0);
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
   
    this.props.processForm(formData, (postId) => {
      this.props.history.push(`/posts/${postId}`)
      this.props.addTags({tag:{ tags: this.state.tags.join(","), postId }});
      }
    );
  }

  handleChange(label){
    return (e) => {
      if (!this.state.edited) {
        this.setState({ edited: true });
      }
      this.setState({ [label] : e.currentTarget.value })
    }
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deletePost().then(() => this.props.history.push(`/`));
  }

  renderDeleteButton(){
    return (
      this.props.formType === "Edit" && (
        <div className="btn btn-delete" onClick={this.handleDelete}>
          Delete photo
        </div>
      )
    );
  }

  renderTagForm(){     
    let { tags, originalTags } = this.state;
    const { formType } = this.props;
    console.log(tags, originalTags)

    let formattedTags = formType === "Edit" ? [...originalTags.map(tag => tag.name), ...tags] : tags    
    return (
      <TagFormContainer
        tags={formattedTags}
        addTagPost={(tag) => this.setState({ tags: [...tags, tag] })}
      />
    );
  }

  renderErrors(){
    return (
      <ul className="errors">
        {this.props.errors.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
    );
  }

  renderSubmitCancelButtons(){
    const { formType } = this.props;
    const linkRoute = formType === "Upload" ? "/" : `/posts/${this.props.match.params.postId}`;
    const submitBtnName = formType === "Edit" ? "Save changes" : formType
 
    if ((formType === "Edit" && this.state.edited) || formType === "Upload") {
      return (
        <div className="buttons">
          <Link to={linkRoute}>Cancel</Link>
            <input className="btn submit-btn" type="submit" value={submitBtnName} />
        </div>
      );
    } 
  }

  render(){
    const { photoFile, title, description, photoUrl } = this.state;
    return (
      <div>
        <div className="header-small">
          <h2>{this.props.formType === "Edit" ? "Photo manager" : this.props.formType}</h2>
        </div>

        <div className="form-container">
          {!photoFile && this.props.formType !== "Edit" && (
            <UploadImageInput handleFile={this.handleFile} />
          )}

          <ImagePreview photoUrl={photoUrl} title={title} />

          <form onSubmit={this.handleSubmit} className="post-form">
            <div className="inputs">
              <label>
                Title
                <input
                  type="text"
                  value={title}
                  onChange={this.handleChange("title")}
                  required
                />
              </label>

              <label>
                Description
                <textarea
                  value={description}
                  onChange={this.handleChange("description")}
                  placeholder="e.g. Low angle view of a young bulldog skateboarding near a beach with a striking sunset"
                  required
                />
              </label>

              {this.renderDeleteButton()}
              {this.renderTagForm()}
            </div>
            {this.renderErrors()}

            {this.renderSubmitCancelButtons()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PostForm);