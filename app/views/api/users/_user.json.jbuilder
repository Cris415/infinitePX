# json.user do
  json.extract! user, :id, :username
# end

json.follows do
  user.follows
  # json.extract! user.followers, :id, :follower_id
  # json.extract! user.followers, :follower_id
end
