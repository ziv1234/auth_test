class Dream < ApplicationRecord
  belongs_to :user
  has_many_attached :images
  has_many :comments
end
