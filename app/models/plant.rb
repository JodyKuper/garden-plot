class Plant < ApplicationRecord
	validates :name, presence: true
	belongs_to :plot
	has_many_attached :images
end
