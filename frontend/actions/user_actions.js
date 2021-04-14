import * as usersAPI from "../util/users_api_util";

import { receivePosts } from './post_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = ({user}) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

export const fetchUserPosts = (userId) => (dispatch) => (
  usersAPI
    .fetchUserPosts(userId)
    .then((posts) => dispatch(receivePosts(posts)))
    .fail((err) => dispatch(receiveUserErrors(err.responseJSON)))
)


export const fetchUser = userId => dispatch => (
  usersAPI.fetchUser(userId).then(user => dispatch(receiveUser(user)))
  .fail(err => dispatch(receiveUserErrors(err.responseJSON)))
)