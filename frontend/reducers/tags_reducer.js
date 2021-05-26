import { RECEIVE_TAGS, REMOVE_TAG } from "../actions/tag_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  console.log(action)
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case REMOVE_TAG:
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
