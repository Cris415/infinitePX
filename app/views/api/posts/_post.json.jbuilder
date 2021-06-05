json.extract! post, :id, :title, :description, :user_id, :created_at
json.tagIds post.tags.pluck(:id)
json.photoUrl url_for(post.photo)