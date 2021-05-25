import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import CommentIndex from "./comment_index";
import { deleteComment, fetchPostComments } from "../../actions/comment_actions";

const mapStateToProps = (state) => ({
  comments: Object.values(state.entities.comments),
  users: state.entities.users,
  currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPostComments: () =>
    dispatch(fetchPostComments(ownProps.match.params.postId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));
