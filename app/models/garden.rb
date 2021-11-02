class Garden < ApplicationRecord
	validates :image, presence: true
	
	has_many :plots, inverse_of: :garden
	accepts_nested_attributes_for :plots
	belongs_to :user
	has_one_attached :image
end
