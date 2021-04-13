export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: '/api/api/users/:id'
  })
)