import * as postAPI from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePosts = ({posts, users}) => ({
  type: RECEIVE_POSTS,
  posts,
  users
});

export const receivePost = ({post, user}) => ( {
  type: RECEIVE_POST,
  post,
  user
});

export const fetchPosts = () => dispatch => (
  postAPI.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = postId => dispatch => (
  postAPI.fetchPost(postId).then(post => dispatch(receivePost(post)))
);

export const createPost = (post, redirectCallback) => dispatch => (
  postAPI.createPost(post).then(post => {
    dispatch(receivePost(post));
    redirectCallback(post.post.id);
  })
);

