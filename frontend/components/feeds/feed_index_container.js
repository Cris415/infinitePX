import { connect } from "react-redux";
import PostIndex from "../posts/post_index/post_index";
import { fetchPosts } from "../../actions/post_actions";
import { postsByFollowers } from '../../selectors/posts_by_followers_selector';

const mapStateToProps = (state) => ({
  posts: postsByFollowers(Object.values(state.entities.posts), state.entities.users[state.session.id].follows),
  users: state.entities.users,
  loading: state.ui.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
