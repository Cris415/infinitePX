import React from "react";
import TagIndex from "./tag_index";

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", focus: false };

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

  handleRemoveTag(tag) {
    return (e) => {
      e.preventDefault();
      this.props.action(tag)
    }
  }

  render() {
    return (
      <div
        className={`tag-form ${this.props.focus ? "focus" : ""}`}
        onClick={this.props.setFocus}
      >
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Type your own keywords here"
          className="tag-form-input"
        />
        <button
          onClick={this.handleAddTag}
          className="tag-form-button"
        ></button>
        <TagIndex tags={this.props.tags} remove={this.handleRemoveTag} tagType="remove" />
      </div>
    );
  }
}

export default TagForm;
