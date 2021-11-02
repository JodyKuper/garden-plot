class User < ApplicationRecord
	validates :username, presence: true, uniqueness: true
	validates :image, presence: true
	has_one :garden
	has_secure_password
	has_one_attached :image
end
