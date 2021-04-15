import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserPosts } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  posts: Object.values(state.entities.posts).filter(
    post =>  post.userId == ownProps.match.params.userId
  ),
  user: state.entities.users[ownProps.match.params.userId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserPosts: () => {
    return dispatch(fetchUserPosts(ownProps.match.params.userId))}
});


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);