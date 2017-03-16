class Attendee < ApplicationRecord
  belongs_to :user
  belongs_to :event

  acts_as_hashids
end
