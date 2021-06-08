import { RECEIVE_TAGS, RECEIVE_TAG_SEARCH, REMOVE_TAG } from "../actions/tag_actions";
import { RECEIVE_POST  } from "../actions/post_actions";

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
    case RECEIVE_TAG_SEARCH:
      return [...state, ...action.tags]
    default:
      return state;
  }
};

export default tagsReducer;
