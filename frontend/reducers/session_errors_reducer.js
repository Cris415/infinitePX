import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";

import { CLEAR_ERRORS } from '../actions/error_actions';

const sessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default sessionErrorsReducer;