import * as commentAPI from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors,
});


export const receiveComments = ({comments, users}) => ({
  type: RECEIVE_COMMENTS,
  comments,
  users
});

export const receiveComment = ({comment, user}) => ({
  type: RECEIVE_COMMENT,
  comment,
  user
});

export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchPostComments = (postId) => dispatch => {
  commentAPI.fetchPostComments(postId)
  .then(comments => {
    dispatch(receiveComments(comments))});
}

export const createComment = (comment) => dispatch => (
  commentAPI.createComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
  .fail(err => dispatch(receiveCommentErrors(err.responseJSON)))
)

export const editComment = comment => dispatch => (
  commentAPI.editComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch => (
  commentAPI.deleteComment(commentId).then(() => dispatch(removeComment(commentId)))
)