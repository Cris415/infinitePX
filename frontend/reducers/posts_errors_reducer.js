import { CLEAR_ERRORS } from '../actions/error_actions';
import { RECEIVE_POST_ERRORS, RECEIVE_POST } from '../actions/post_actions';

const postsErrorsReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_POST_ERRORS:
      return action.errors;
    case RECEIVE_POST:
    case CLEAR_ERRORS:
      return [];
    default: 
      return state;
  }
}

export default postsErrorsReducer;