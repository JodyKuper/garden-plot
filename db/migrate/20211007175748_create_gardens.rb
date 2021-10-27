class CreateGardens < ActiveRecord::Migration[6.1]
  def change
    create_table :gardens do |t|
      t.string :season
      t.string :image_url
      t.integer :user_id

      t.timestamps
    end
  end
end
