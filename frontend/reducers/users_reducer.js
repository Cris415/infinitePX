import { RECEIVE_CURRENT_USER  } from '../actions/session_actions';
import { RECEIVE_POSTS  } from '../actions/post_actions';

const usersReducer = (state={}, action) => {
  Object.freeze(state);
  console.log(state)
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, action.posts.users );
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id] : action.user } )
    default:
      return state;
  }
}

export default usersReducer;