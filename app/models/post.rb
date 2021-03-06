class Post < ApplicationRecord
  validates :description, :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id, message: "cannot be identical to other titles" }

  validate :ensure_photo

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_many :comments,
  foreign_key: :post_id,
  class_name: :Comment

  has_many :tagged_posts,
    foreign_key: :post_id,
    class_name: :TaggedPost
  
  has_many :tags,
    through: :tagged_posts,
    source: :tag

  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

end
