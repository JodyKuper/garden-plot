class Garden < ApplicationRecord
	has_many :plots
	belongs_to :user
	has_one_attached :image
end
