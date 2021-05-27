import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addTags, deleteTag } from "../../actions/tag_actions";
import TagForm from './tag_form';

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId]
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteTag: (tagId) =>
    dispatch(deleteTag(tagId, ownProps.match.params.postId)),
    // addTags: (tags) => dispatch(addTags(tags))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagForm));