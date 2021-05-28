import { connect } from 'react-redux';

import PostForm from './post_form';
import { createPost } from '../../../actions/post_actions';
import { clearErrors } from '../../../actions/error_actions';
import { addTags, deleteTag } from "../../../actions/tag_actions";


const mapStateToProps = state => ({
  formType: 'Upload',
  post: {title: '', description: '', photoFile: null, photoUrl: null, tags: []},
  currentUser: state.session.id,
  errors: state.errors.posts
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (post, redirectCallback) =>
  dispatch(createPost(post, redirectCallback)),
  clearErrors: () => dispatch(clearErrors()),
  addTags: (tags) => dispatch(addTags(tags)),
  deleteTag: (tagId, postId) => dispatch(deleteTag(tagId, postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);