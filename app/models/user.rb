class User < ApplicationRecord
  include BCrypt

  has_many :attendees
  has_many :events, through: :attendees

  def fullname
    "#{first_name} #{last_name}"
  end

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
end
