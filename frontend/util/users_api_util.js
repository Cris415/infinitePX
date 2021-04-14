export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);

export const fetchUserPosts = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/posts`
  })
);