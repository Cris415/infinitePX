class Comment < ApplicationRecord
  validates :comment, :author_id, :post_id, presence: true

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
