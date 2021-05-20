import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  REMOVE_POST
} from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case RECEIVE_POSTS:
      if (action.posts === undefined) {
        return {}
      };
      // originally returned the state if undefined.. not sure whats better
      // if (action.posts === undefined) return state;
      return action.posts
    case REMOVE_POST:
      delete newState[action.postId]
      return newState;
    default:
      return state;
  }
}

export default postsReducer;