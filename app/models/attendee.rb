class Attendee < ApplicationRecord
  belongs_to :user
  belongs_to :event

  acts_as_hashids

  def decorated_rsvp_sort
    if rsvp == true
      1
    elsif rsvp == false
      2
    else
      0
    end
  end

  def decorated_rsvp
    if rsvp == true
      'Yes'
    elsif rsvp == false
      'No'
    else
      '?'
    end
  end

  def decorated_plus_one_invited
    if plus_one_invited == true
      'Yes'
    else
      '-'
    end
  end

  def decorated_plus_one_attending
    if plus_one_attending == true
      'Yes'
    elsif plus_one_attending == false
      'No'
    elsif plus_one_invited == true
      '?'
    else
      '-'
    end
  end
end
