class Event < ApplicationRecord
  has_many :attendees
  has_many :users, through: :attendees

  def invited_count
    confirmed_count + unconfirmed_count
  end

  def confirmed_count
    attendees.where(rsvp: true).count + attendees.where(plus_one_attending: true).count
  end

  def declined_count
    attendees.where(rsvp: false).count
  end

  def declined_plus_one_count
    attendees.where(plus_one_attending: false).count
  end

  def unconfirmed_count
    attendees.where(rsvp: nil).count + attendees.where(plus_one_invited: true, plus_one_attending: nil).count
  end
end
