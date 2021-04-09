export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/posts/'
  })
);

export const fetchPost = postId => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  })
);

export const createPost = post => (
  $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post,
    contentType: false,
    processData: false
  })
);
