class Post < ApplicationRecord
  validates :description, :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id, message: "Cannot create identical titles" }

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_one_attached :photo

end
