import React from "react";
import TagIndex from "./tag_index";
import TagSuggestionsContainer from "./tag_suggestions_container";

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", focus: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
    this.addTagFromSuggestions = this.addTagFromSuggestions.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value }, () =>
      this.props.searchTags(this.state.name)
    );
  }

  handleAddTag(e) {
    e.preventDefault();
    if (this.state.name.length > 1) {
      this.props.addTagPost(this.state.name.toLowerCase());
      this.setState({ name: "" });
    }
  }

  addTagFromSuggestions(tag) {
    this.props.addTagPost(tag);
    this.setState({ name: "" });
    // CLEAR SEARCH RESULT IDS
    this.props.clearTagSearch();
  }

  handleRemoveTag(tag) {
    return (e) => {
      e.preventDefault();
      this.props.action(tag);
    };
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
        <TagSuggestionsContainer addTag={this.addTagFromSuggestions} />
        <button
          onClick={this.handleAddTag}
          className="tag-form-button"
        ></button>
        <TagIndex
          tags={this.props.tags}
          remove={this.handleRemoveTag}
          tagType="remove"
        />
      </div>
    );
  }
}

export default TagForm;
