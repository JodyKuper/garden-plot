class Plant < ApplicationRecord
	belongs_to :plot
	has_many_attached :images
end
