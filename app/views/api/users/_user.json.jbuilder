json.extract! user, :id, :username

json.follows user.group_of_follows.pluck(:followed_id)
