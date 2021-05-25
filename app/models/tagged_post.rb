class TaggedPost < ApplicationRecord
  validates :post_id, uniqueness: { scope: :tag_id, messages: "cannot tag the same post twice with the same tag"}

  belongs_to :post,
  foreign_key: :post_id,
  class_name: :Post

  belongs_to :tag,
  foreign_key: :tag_id,
  class_name: :Tag

end
