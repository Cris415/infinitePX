import { connect } from 'react-redux';

import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = state => ({
  formType: 'Create Post',
  post: {title: '', description: ''},
  currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
  processForm: (post) => dispatch(createPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)