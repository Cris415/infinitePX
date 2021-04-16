export const createFollow = followedId => (
  $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: { id: followedId }
  })
);

export const deleteFollow = followId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/follows/${followId}`
  })
)