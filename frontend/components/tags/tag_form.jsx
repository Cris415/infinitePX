import React from "react";
import TagIndex from "./tag_index";
import TagSuggestionsContainer from "./tag_suggestions_container";

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      focus: false,
      cursor: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
    this.addTagFromSuggestions = this.addTagFromSuggestions.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value }, () =>
      this.props.searchTags(this.state.name)
    );
  }

  clearTagInputs() {
    this.setState({ name: "" });
    this.props.clearTagSearch();
    this.setState({ cursor: 0 });
  }

  handleAddTag(e) {
    e.preventDefault();
    const { name, cursor } = this.state;
    const { results, addTagPost } = this.props;
    if (results.length > 0) {
      addTagPost(results[cursor].name.toLowerCase());
      this.clearTagInputs();
    } else if (name.length > 1) {
      addTagPost(name.toLowerCase());
      this.clearTagInputs();
    }
  }

  addTagFromSuggestions(tag) {
    this.props.addTagPost(tag);
    this.clearTagInputs();
  }

  handleRemoveTag(tag) {
    return (e) => {
      e.preventDefault();
      this.props.action(tag);
    };
  }

  handleKeyDown(e) {
    // https://stackoverflow.com/questions/42036865/react-how-to-navigate-through-list-by-arrow-keys
    const { cursor } = this.state;
    const { results } = this.props;

    if (e.keyCode === 38 && cursor > 0) {
      this.setState((prevState) => ({
        cursor: prevState.cursor - 1,
      }));
    } else if (e.keyCode === 40 && cursor < results.length - 1) {
      this.setState((prevState) => ({
        cursor: prevState.cursor + 1,
      }));
    }
    if (e.keyCode === 40 || e.keyCode === 48) {
      const result = this.props.results[cursor].name
      this.props.resultRefs[result].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
          onKeyDown={this.handleKeyDown}
        />

        <TagSuggestionsContainer
          cursor={this.state.cursor}
          addTag={this.addTagFromSuggestions}
          resultRefs={this.props.resultRefs}
        />

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
