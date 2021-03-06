import React from "react";
import { Link, withRouter } from "react-router-dom";
import ImagePreview from "./image_preview";
import UploadImageInput from "./upload_image_input";
import TagFormContainer from "../../tags/tag_form_container";
import SubmitCancelButtons from "./submit_cancel_buttons";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.props.post.edited = false;
    this.state = this.props.post;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setTagFocus = this.setTagFocus.bind(this);
    this.addTagsToPost = this.addTagsToPost.bind(this);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      let [name, extension] = file.name.split(".");
      extension = extension.toLowerCase();

      // If the extensions don't match the following, state will not be set.
      if (extension !== "jpg" && extension !== "jpeg") return;

      this.setState({
        photoFile: file,
        photoUrl: fileReader.result,
        title: name,
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    formData.append("post[description]", this.state.description);
    if (this.props.formType === "Upload") {
      formData.append("post[userId]", this.props.currentUser);
    }

    if (this.state.photoFile) {
      formData.append("post[photo]", this.state.photoFile);
    }

    if (this.props.formType === "Edit" && this.state.id) {
      formData.append("post[postId]", this.state.id);
    }

    this.props.processForm(formData, (postId) => {
      this.props.history.push(`/posts/${postId}`);
      this.props.addTags({ tag: { tags: this.state.tags.join(","), postId } });
      if (this.props.formType === "Edit") {
        // list of tags to be removed
        // get their IDs
        const removeTagsIds = this.state.removeTags.map(
          (removeTag) =>
            this.props.tags.find((tag) => tag.name === removeTag).id
        );
        // invoke deleteTag for each tag
        removeTagsIds.forEach((id) => this.props.deleteTag(id, this.state.id));
      }
    });
  }

  handleChange(label) {
    return (e) => {
      if (!this.state.edited) {
        this.setState({ edited: true });
      }
      this.setState({ [label]: e.currentTarget.value });
    };
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost().then(() => this.props.history.push(`/`));
  }

  renderDeleteButton() {
    return (
      this.props.formType === "Edit" && (
        <div className="btn btn-delete" onClick={this.handleDelete}>
          Delete photo
        </div>
      )
    );
  }

  setTagFocus(status) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ tagFormFocus: status });
    };
  }

  addTagsToPost(tag) {
    let { tags, displayTags } = this.state;

    if (!displayTags.includes(tag)) {
      this.setState({
        tags: [...tags, tag],
        displayTags: [...displayTags, tag],
        edited: true,
      });
    }
  }

  renderTagForm() {
    let { tags, preloadedTags, displayTags, removeTags } = this.state;
    const action = (clickedTag) => {
      // remove tag from state
      // Add tag to a delete array
      const filteredTags = tags.filter((tag) => tag !== clickedTag);
      this.setState({
        displayTags: displayTags.filter((tag) => tag !== clickedTag),
      });

      // only add tags to remove if they are preloaded
      // since an api call is needed to remove those tags
      if (preloadedTags && preloadedTags.includes(clickedTag)) {
        this.setState({
          tags: filteredTags,
          removeTags: [...removeTags, clickedTag],
          edited: true,
        });
      } else {
        this.setState({ tags: filteredTags, edited: true });
      }
    };

    return (
      <TagFormContainer
        tags={displayTags}
        addTagPost={this.addTagsToPost}
        action={action}
        focus={this.state.tagFormFocus}
        setFocus={this.setTagFocus(true)}
      />
    );
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { photoFile, title, description, photoUrl, edited } = this.state;
    const { formType } = this.props;
    return (
      <div>
        <div className="header-small">
          <h2>{formType === "Edit" ? "Photo manager" : formType}</h2>
        </div>

        <div className="form-container">
          {!(photoFile || formType === "Edit") && (
            <UploadImageInput handleFile={this.handleFile} />
          )}

          <ImagePreview photoUrl={photoUrl} title={title} />

          <form onSubmit={this.handleSubmit} className="post-form">
            <div className="inputs" onClick={this.setTagFocus(false)}>
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

              <label>
                Keywords
                {this.renderTagForm()}
              </label>

              {this.renderDeleteButton()}
            </div>

            {this.renderErrors()}
            <SubmitCancelButtons
              formType={formType}
              edited={edited}
              postId={this.props.match.params.postId}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PostForm);
