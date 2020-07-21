class Task < ApplicationRecord
    validates :title, presence: true, length: {minimum: 2, maximum: 40}
    validates :description, length: {maximum: 200}
end
