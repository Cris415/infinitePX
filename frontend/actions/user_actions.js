import * as usersAPI from "../util/users_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

export const fetchUser = userId => (
  usersAPI.fetchUser(userId).then(user => dispatch(receiveUser(user)))
  .fail(err => dispatch(receiveUserErrors(err.responseJSON)))
)