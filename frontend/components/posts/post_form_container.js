import { connect } from 'react-redux';

import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  formType: 'Upload',
  post: {title: '', description: '', photoFile: null, photoUrl: null},
  currentUser: state.session.id,
  errors: state.errors.posts
})

const mapDispatchToProps = dispatch => ({
  processForm: (post, redirectCallback) => dispatch(createPost(post, redirectCallback)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)