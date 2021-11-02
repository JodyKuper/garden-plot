class Plot < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :width, presence: true, numericality: true, numericality:{less_than_or_equal_to: 20}
	validates :length, presence: true, numericality: true, numericality:{less_than_or_equal_to: 20}
	has_many :plants
	belongs_to :garden, inverse_of: :plots
end
