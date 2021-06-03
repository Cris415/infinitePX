class TaggedPost < ApplicationRecord
  validates :tag_id, uniqueness: { scope: :post_id }

  belongs_to :post,
  foreign_key: :post_id,
  class_name: :Post

  belongs_to :tag,
  foreign_key: :tag_id,
  class_name: :Tag

end
