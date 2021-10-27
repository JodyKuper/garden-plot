class CreatePlots < ActiveRecord::Migration[6.1]
  def change
    create_table :plots do |t|
      t.string :name
      t.float :length
      t.float :width
      t.string :sun
      t.integer :garden_id

      t.timestamps
    end
  end
end
