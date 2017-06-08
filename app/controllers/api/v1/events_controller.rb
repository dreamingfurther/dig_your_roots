class Api::V1::EventsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @user = User.find(params["user_id"])
    render json: events, status: 200
  end

  private

  def events
    @user.events.map do |event|
      {
        id: event.id,
        name: event.name,
        date: event.date_string,
        description: event.description,
        picture: event.picture,
        time: event.time,
        city: event.city,
        state: event.state,
        rsvp: attendee_for(event).rsvp,
        rsvp_code: attendee_for(event).to_param,
        rsvp_description: event.rsvp_description,
        food_options: event.food_options,
        details: event.details_data
      }
    end
  end

  def attendee_for(event)
    Attendee.find_by(user: @user, event: event)
  end
end
