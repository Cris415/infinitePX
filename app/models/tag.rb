class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validate  :tag_too_long

  def tag_too_long
    if name && name.length > 30 
      errors.add :name, message:  'is too long'
    end
  end

  has_many :tagged_posts,
    foreign_key: :tag_id,
    class_name: :TaggedPost

  has_many :posts,
    through: :tagged_posts,
    source: :post

end
