@posts.includes(:user).each do |post|
  json.posts do
    json.set! post.id do
      json.partial! 'post', post: post
    end
  end

  json.users do
    json.set! post.user.id  do
      json.partial! "api/users/user", user: post.user
    end
  end
end