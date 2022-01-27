import React from "react";
import TagIndex from "./tag_index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { searchPosts } from "../../actions/post_actions";

const PostShowTagIndex = (props) => {
  const handleTagSearch = (tag) => {
    return () => {
      const searchTerm = tag;
      props.searchPosts(searchTerm);
      props.history.push(`/results/${searchTerm}`);
    };
  };

  return (
    <TagIndex
      tags={props.tags.map((tag) => tag.name)}
      search={handleTagSearch}
      tagType="show"
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const { posts, tags } = state.entities;
  const { postId } = ownProps.match.params;

  let postTags = posts[postId].tagIds;

  const newTags = Object.values(tags).filter((tag) =>
    postTags.includes(tag.id)
  );

  return {
    tags: newTags,
  };
};

const mapDispatchToProps = (dispatch) => ({
  searchPosts: (searchTerm) => dispatch(searchPosts(searchTerm, "tag")),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostShowTagIndex)
);
