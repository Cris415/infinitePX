import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  createFollow: () => dispatch(createFollow(ownProps.user.id)),
  deleteFollow: () => dispatch(deleteFollow(ownProps.user.id))
})


export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);