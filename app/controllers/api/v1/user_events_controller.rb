class Api::V1::UserEventsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    binding.pry
    if user.present?
      render json: fake_data, status: 200
    else
      render json: { error: "No attendee found for that id" }, status: 422
    end
  end

  private

  def fake_data
    {
      guest: {
        first_name: "David",
        last_name: "Tengdin",
        id: params["id"]
      },
      events: [
        {
          id: first_event.id,
          name: first_event.name,
          date: first_event.date_string,
          rsvp: parse_rsvp(first_event)
        },
        {
          id: last_event.id,
          name: last_event.name,
          date: last_event.date_string,
          rsvp: parse_rsvp(last_event)
        }
      ]
    }
  end

  def parse_rsvp(event)
    rsvp = Attendee.find_by(user: user, event: event).rsvp
    return "Yes" if rsvp == true
    return "No" if rsvp == false
    "Pending"
  end

  def user
    @user ||= User.find(params['id'])
  end

  def first_event
    @first_event ||= user.events.first
  end

  def last_event
    @last_event ||= user.events.last
  end
end
