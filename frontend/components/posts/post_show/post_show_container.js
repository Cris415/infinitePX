import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost, searchPosts } from "../../../actions/post_actions";

import { postAuthorSelector } from "../../../selectors/post_author_selector";

const mapStateToProps = (state, ownProps) => {
  const { posts, tags } = state.entities;
  const { postId } = ownProps.match.params;
  let postTags = [];

  if (posts[postId]) {
    postTags = posts[postId].tagIds;
  }

  const newTags = Object.values(tags).filter((tag) =>
    postTags.includes(tag.id)
  );

  return {
    post: posts[postId],
    author: postAuthorSelector(state, postId),
    tags: newTags,
    currentUserId: state.session.id,
    errors: state.errors.posts,
    loading: state.ui.loading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPost: () => dispatch(fetchPost(ownProps.match.params.postId)),
  searchPosts: (searchTerm) => dispatch(searchPosts(searchTerm, "tag")),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
