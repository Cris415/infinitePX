import { RECEIVE_CURRENT_USER  } from '../actions/session_actions';
import { RECEIVE_POSTS, RECEIVE_POST  } from '../actions/post_actions';
import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_POSTS:
      return Object.assign({}, action.users, state);
    case RECEIVE_POST:
        return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
        return Object.assign({}, state, { [action.user.id]: action.user });
      case RECEIVE_COMMENTS:
        return {...state, ...action.users}
    default:
      return state;
  }
}

export default usersReducer;