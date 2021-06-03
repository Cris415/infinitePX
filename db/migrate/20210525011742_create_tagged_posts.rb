class CreateTaggedPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :tagged_posts do |t|
      t.integer :post_id
      t.integer :tag_id

      t.timestamps
    end
    add_index :tagged_posts, [:post_id, :tag_id], unique: true
  end
end
