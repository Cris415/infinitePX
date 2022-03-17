import { connect } from 'react-redux';
import PostIndex from '../posts/post_index/post_index';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => ({
  posts: Object.values(state.entities.posts),
  users: state.entities.users,
  loading: state.ui.loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);