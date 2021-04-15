import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';

const followsReducer = (state={}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    // case RECEIVE_POSTS:
    //   console.log(action);
    //   return state;
    // case RECEIVE_POST:
    //   console.log(action.user)
    //   return state;
    // case RECEIVE_USER:  
    //   newState[action.user.id] = action.follows;
    default:
      return state;
  }
}

export default followsReducer;