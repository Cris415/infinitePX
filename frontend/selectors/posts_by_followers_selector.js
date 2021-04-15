// array of posts and an array of user ids (followers)
export const postsByFollowers = (posts, followers) =>  {
  return posts.filter(post => followers.includes(post.userId))
}

