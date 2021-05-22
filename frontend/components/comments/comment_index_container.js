import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import CommentIndex from "./comment_index";
import { fetchPostComments } from "../../actions/comment_actions";

const mapStateToProps = (state) => ({
  comments: Object.values(state.entities.comments),
  users: state.entities.users,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPostComments: () =>
    dispatch(fetchPostComments(ownProps.match.params.postId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));
