class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.date :date_planted
      t.date :date_harvested
      t.string :need_sun
      t.string :image_url
      t.integer :plot_id

      t.timestamps
    end
  end
end
