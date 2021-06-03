import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PostForm from "./post_form";
import { fetchPost, editPost, deletePost } from "../../../actions/post_actions";
import { addTags, deleteTag } from "../../../actions/tag_actions";
import { clearErrors } from "../../../actions/error_actions";

class EditPost extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    if (!this.props.post) return null;

    const { post, currentUserId, tags } = this.props;
    const formattedTags = tags.map((tag) => tag.name);

    post["preloadedTags"] = formattedTags;
    post["displayTags"] = formattedTags;

    post["tags"] = [];
    post["removeTags"] = [];
    post["tagFormFocus"] = false;

    // redirect if user is not author
    if (currentUserId !== post.userId) {
      return <Redirect to={`/posts/${this.props.match.params.postId}`} />;
    }

    return <PostForm {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  formType: "Edit",
  post: state.entities.posts[ownProps.match.params.postId],
  errors: state.errors.posts,
  currentUserId: state.session.id,
  tags: Object.values(state.entities.tags),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (post, redirectCallback) =>
    dispatch(editPost(post, redirectCallback)),
  clearErrors: () => dispatch(clearErrors()),
  fetchPost: () => dispatch(fetchPost(ownProps.match.params.postId)),
  deletePost: () => dispatch(deletePost(ownProps.match.params.postId)),
  addTags: (tags) => dispatch(addTags(tags)),
  deleteTag: (tagId, postId) => dispatch(deleteTag(tagId, postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
