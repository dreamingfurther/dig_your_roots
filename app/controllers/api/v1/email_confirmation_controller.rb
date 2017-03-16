class Api::V1::EmailConfirmationController < ApplicationController
  def show
    if attendee.present?
      render json: data, status: 200
    else
      render json: { error: "No attendee found for that id" }, status: 422
    end
  end

  private

  def data
    {
      guest: {
        first_name: user.first_name,
        last_name: user.last_name,
        plus_one_invited: attendee.plus_one_invited
      },
      event: {
        name: event.name,
        date: event.date_string,
        time: event.time,
        city: event.city,
        state: event.state,
        rsvp_description: event.rsvp_description,
        details: event.details_data
      }
    }
  end

  def attendee
    begin
      @attendee ||= Attendee.find(params[:id])
    rescue
      @attendee = nil
    end
  end

  def user
    @user ||= attendee.user
  end

  def event
    @event ||= attendee.event
  end
end
