class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :tagged_posts,
    foreign_key: :tag_id,
    class_name: :TaggedPost

  has_many :posts,
    through: :tagged_posts,
    source: :post

end
