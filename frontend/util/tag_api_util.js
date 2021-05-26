export const fetchPostTags = (postId) =>
  $.ajax({
    method: "GET",
    url: `/api/posts/${postId}/tags`,
  });

export const searchTags = (searchTerm) =>
  $.ajax({
    method: "GET",
    url: `/api/tags/?query=${searchTerm}`,
  });

export const addTags = (tags) =>
  $.ajax({
    method: "POST",
    url: "/api/tags",
    data: tags, // tags includes post_id
  });

export const deleteTag = (tagId, postId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/posts/${postId}/tags/${tagId}`,
  });
