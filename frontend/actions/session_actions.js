import * as sessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = (user) => dispatch => (
  sessionAPI.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  sessionAPI.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((err) => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  sessionAPI.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveSessionErrors(err.responseJSON)))

);