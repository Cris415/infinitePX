import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../../actions/post_actions'

import { postAuthorSelector } from '../../../selectors/post_author_selector';

const mapStateToProps = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId],
  author: postAuthorSelector(state, ownProps.match.params.postId),
  currentUserId: state.session.id,
  errors: state.errors.posts,
  loading: state.ui.loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPost: () => dispatch(fetchPost(ownProps.match.params.postId))
  })

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);