import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost } from "../../../actions/post_actions";

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
    tags: newTags,
    errors: state.errors.posts,
    loading: state.ui.loading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPost: () => dispatch(fetchPost(ownProps.match.params.postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
