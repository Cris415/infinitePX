import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
// create fetchUserPosts?

const mapStateToProps = (state, ownProps) => ({
  posts: state.entities.posts, //get posts from a specific user,
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: () => dispatch(fetchUser(ownProps.match.params.userId)),
  fetchPosts: () => dispatch(fetchPosts())
});


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);