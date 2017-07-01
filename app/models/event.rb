class Event < ApplicationRecord
  has_many :event_details
  has_many :attendees
  has_many :users, through: :attendees

  def details_data
    event_details.inject({}) { |hash, detail| hash[detail.name] = detail.body; hash }
  end

  def date_string
    date.strftime("%m.%d.%Y")
  end

  def invited_count
    confirmed_count + unconfirmed_count
  end

  def confirmed_count
    attendees.where(rsvp: true).count +
      attendees.where(rsvp: true, plus_one_attending: true).count
  end

  def declined_count
    attendees.where(rsvp: false).count +
      attendees.where(plus_one_attending: false).count +
      attendees.where(rsvp: false).where(plus_one_invited: true, plus_one_attending: nil).count
  end

  def declined_plus_one_count
    attendees.where(plus_one_attending: false).count
  end

  def unconfirmed_count
    attendees.where(rsvp: nil, plus_one_invited: false).count +
      attendees.where(rsvp: nil, plus_one_invited: true, plus_one_attending: nil).count
  end
end
