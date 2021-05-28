import { RECEIVE_TAGS, REMOVE_TAG } from "../actions/tag_actions";
import { RECEIVE_POST } from "../actions/post_actions";

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POST:
    case RECEIVE_TAGS:
      if (action.tags === undefined) {
        return {};
      }
      return action.tags;
    case REMOVE_TAG:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default tagsReducer;