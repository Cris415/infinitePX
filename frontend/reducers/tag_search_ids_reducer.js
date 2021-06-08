import { RECEIVE_TAG_SEARCH } from '../actions/tag_actions';

const tagSearchIdReducer = (state=[], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_TAG_SEARCH:
      return action.ids;
    default:
      return state;
  }
}

export default tagSearchIdReducer;