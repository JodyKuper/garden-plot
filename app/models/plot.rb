class Plot < ApplicationRecord
	has_many :plants
	belongs_to :garden
end
