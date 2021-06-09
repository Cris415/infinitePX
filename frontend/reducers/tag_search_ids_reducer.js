import { RECEIVE_TAG_SEARCH, CLEAR_TAG_SEARCH } from '../actions/tag_actions';

const tagSearchIdReducer = (state=[], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_TAG_SEARCH:
      return action.ids;
    case CLEAR_TAG_SEARCH:
      return [];
    default:
      return state;
  }
}

export default tagSearchIdReducer;