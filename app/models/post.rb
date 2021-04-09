class Post < ApplicationRecord
  validates :description, :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id, message: "cannot create identical titles" }

  validate :ensure_photo

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

end
