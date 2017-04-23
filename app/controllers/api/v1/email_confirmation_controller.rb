class Api::V1::EmailConfirmationController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def update
    if attendee.present? && attendee_updated && user_updated
      render json: user, status: 201
    else
      render json: { error: "No attendee found for that id" }, status: 422
    end
  end

  def show
    if attendee.present?
      render json: data, status: 200
    else
      render json: { error: "No attendee found for that id" }, status: 422
    end
  end

  private

  def attendee_updated
    notes = attendee.user_notes

    attendee.update_attributes(
      rsvp:               convert_to_boolean(params["answer"]["rsvp"]),
      plus_one_attending: convert_to_boolean(params["answer"]["plus_one_attending"]),
      plus_one_fullname:  params["answer"]["plus_one_fullname"],
      user_notes: "#{notes} \n--------\n #{params["answer"]['notes']}"
    )
  end

  def user_updated
    user.password = params["answer"]["password"]
    user.update_attributes(phone: params["answer"]["phone"]) && user.save
  end

  def convert_to_boolean(str)
    return true if str == "Yes"
    return false if str == "No"
  end

  def data
    {
      guest: {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        plus_one_invited: attendee.plus_one_invited,
        id: user.id,
        token: params["id"]
      },
      event: {
        name: event.name,
        date: event.date_string,
        time: event.time,
        city: event.city,
        state: event.state,
        rsvp_description: event.rsvp_description,
        food_options: event.food_options,
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
