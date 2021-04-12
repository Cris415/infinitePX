json.extract! post, :id, :title, :description, :user_id, :created_at
json.photoUrl url_for(post.photo)