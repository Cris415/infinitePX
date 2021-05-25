import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: "createComment",
    preloadedState: {
      comment: "",
      showButtons: false,
      postId: ownProps.match.params.postId,
    },
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    action: (comment) => dispatch(createComment(comment))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));