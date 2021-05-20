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

export const editPost = formData => {
  const postId = formData.get("post[postId]");

  return $.ajax({
    method: "PUT",
    url: `/api/posts/${postId}`,
    data: formData,
    contentType: false,
    processData: false,
  });
}


export const deletePost = postId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
  })
)

export const searchPosts = (searchTerm) => {
  return $.ajax({
    method: 'get',
    url: `/api/search/?query=${searchTerm}` 
  });
};
