import { receiveUser, fetchUser } from './user_actions';
import * as followAPI from '../util/follow_api_util';


export const createFollow = followedId => dispatch => (
  followAPI.createFollow(followedId).then(user => {
    dispatch(receiveUser(user));
  })
)


export const deleteFollow = followedId => dispatch => (
  followAPI.deleteFollow(followedId).then(user => {
    dispatch(receiveUser(user));
  } )
)