import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserPosts, fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  posts: Object.values(state.entities.posts).filter(
    (post) => post.userId == ownProps.match.params.userId
  ),
  user: state.entities.users[ownProps.match.params.userId],
  currentUserId: state.session.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserPosts: () => {
    return dispatch(fetchUserPosts(ownProps.match.params.userId))},
  fetchUser: () => dispatch(fetchUser(ownProps.match.params.userId))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);