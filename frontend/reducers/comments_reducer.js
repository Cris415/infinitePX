import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT,
} from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
      case RECEIVE_COMMENTS:
        if (action.comments === undefined) {
          return {};
        }
        return action.comments;
    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
