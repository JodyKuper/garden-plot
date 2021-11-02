class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_planted, :date_harvested, :need_sun, :image_url
  belongs_to :plot
end
