import * as postAPI from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const fetchPosts = () => dispatch => (
  postAPI.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = postId => dispatch => (
  postAPI.fetchPost(postId).then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  postAPI.createPost(post).then(post => dispatch(receivePost(post)))
);

