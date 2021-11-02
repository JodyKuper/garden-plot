class GardenSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :season, :image, :plots
  has_many :plots
  belongs_to :user
  # def plots
  #   ActiveModel::SerializableResource.new(object.plots,  each_serializer: PlotSerializer)
  # end


  

  def image
    return unless object.image.attached?

    object.image.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: image_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  def image_url
    url_for(object.image)
  end
end
