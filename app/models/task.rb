class Task < ApplicationRecord
    validates :title, presence: true, length: {minimum: 2, maximum: 40}
    validates :title, length: {maximum: 250}
end
