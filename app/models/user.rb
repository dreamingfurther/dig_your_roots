class User < ApplicationRecord
  has_many :attendees
  has_many :events, through: :attendees

  def fullname
    "#{first_name} #{last_name}"
  end
end
