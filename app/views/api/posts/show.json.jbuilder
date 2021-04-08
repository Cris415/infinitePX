json.post do
  json.partial! "api/posts/post", post: @post
end

json.user do
  json.partial! "api/users/user", user: @post.user
end
