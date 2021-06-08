import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  REMOVE_POST
} from "../actions/post_actions";
import { RECEIVE_TAGS } from "../actions/tag_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POST:
    case RECEIVE_TAGS:
      newState[action.post.id] = action.post;
      return newState;
    case RECEIVE_POSTS:
      if (action.posts === undefined) {
        return {}
      };
      return action.posts
    case REMOVE_POST:
      delete newState[action.postId]
      return newState;
    default:
      return state;
  }
}

export default postsReducer;