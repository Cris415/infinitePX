import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost } from "../../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  const { posts } = state.entities;
  const { postId } = ownProps.match.params;
 
  return {
    post: posts[postId],
    errors: state.errors.posts,
    loading: state.ui.loading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPost: () => dispatch(fetchPost(ownProps.match.params.postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
