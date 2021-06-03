import React from "react";
import TagIndex from "./tag_index";

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  }

  handleAddTag(e) {
    e.preventDefault();
    if (this.state.name.length > 1) {
      this.props.addTagPost(this.state.name.toLowerCase());
      this.setState({ name: "" });
    }
  }

  handleRemoveTag(e) {
    e.preventDefault();
    this.props.action(e.currentTarget.innerHTML);
  }

  render() {
    return (
      <div className="tag-form">
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Type your own keywords here"
        />
        <button
          onClick={this.handleAddTag}
          className="tag-form-button"
        ></button>
        <TagIndex tags={this.props.tags} action={this.handleRemoveTag} />
      </div>
    );
  }
}

export default TagForm;
