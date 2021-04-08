export const postAuthorSelector = (state, postId) => {
  const post = state.entities.posts[postId]
  if (post === undefined) {
    return {username: ''}
   }
  return state.entities.users[post.userId]
}