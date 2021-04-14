import {
  START_LOADING_ALL_POSTS,
  START_LOADING_SINGLE_POST,
  RECEIVE_POSTS,
  RECEIVE_POST,
} from "../actions/post_actions";
const loadingReducer = (state=false, action) => {
  switch (action.type) {
    case START_LOADING_ALL_POSTS:
    case START_LOADING_SINGLE_POST:
      return true;
    case RECEIVE_POSTS:
    case RECEIVE_POST:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;