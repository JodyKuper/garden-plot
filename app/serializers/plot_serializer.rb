class PlotSerializer < ActiveModel::Serializer
  attributes :id, :name, :length, :width, :sun
  has_many :plants
end