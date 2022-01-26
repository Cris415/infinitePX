import * as postAPI from "../util/post_api_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const REMOVE_POST = "REMOVE_POST";

export const START_LOADING_ALL_POSTS = "START_LOADING_ALL_POSTS";
export const START_LOADING_SINGLE_POST = "START_LOADING_SINGLE_POST";

export const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors,
});

export const receivePosts = ({ posts, users }) => ({
  type: RECEIVE_POSTS,
  posts,
  users,
});

export const receivePost = ({ post, user, tags }) => ({
  type: RECEIVE_POST,
  post,
  user,
  tags,
});

export const removePost = (postId) => ({
  type: REMOVE_POST,
  postId,
});

export const fetchPosts = () => (dispatch) => {
  dispatch({ type: START_LOADING_ALL_POSTS });
  postAPI.fetchPosts().then((posts) => dispatch(receivePosts(posts)));
};

export const fetchPost = (postId) => (dispatch) => {
  dispatch({ type: START_LOADING_SINGLE_POST });
  postAPI
    .fetchPost(postId)
    .then((post) => dispatch(receivePost(post)))
    .fail((err) => dispatch(receivePostErrors(err.responseJSON)));
};

export const createPost = (post, redirectCallback) => (dispatch) =>
  postAPI
    .createPost(post)
    .then((post) => {
      dispatch(receivePost(post));
      redirectCallback(post.post.id);
    })
    .fail((errs) => dispatch(receivePostErrors(errs.responseJSON)));

export const editPost = (post, redirectCallback) => (dispatch) =>
  postAPI
    .editPost(post)
    .then((post) => {
      dispatch(receivePost(post));
      redirectCallback(post.post.id);
    })
    .fail((errs) => dispatch(receivePostErrors(errs.responseJSON)));

export const deletePost = (postId) => (dispatch) =>
  postAPI
    .deletePost(postId)
    .then(() => dispatch(removePost(postId)))
    .fail((errs) => dispatch(receivePostErrors(errs.responseJSON)));

export const searchPosts =
  (searchTerm, type = "query") =>
  (dispatch) =>
    postAPI
      .searchPosts(searchTerm, type)
      .then((posts) => dispatch(receivePosts(posts)));
