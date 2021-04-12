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

export const editPost = post => (
  $.ajax({
    method: 'PUT',
    url: `/api/posts/${post.id}`,
    data: post,
    contentType: false,
    processData: false
  })
);


export const deletePost = postId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
  })
)
