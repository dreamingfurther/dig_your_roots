class Api::V1::EmailConfirmationController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def update
    if attendee.present? && attendee_updated && user_updated
      send_emails
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
      rsvp:                 convert_to_boolean(params["answer"]["rsvp"]),
      plus_one_attending:   convert_to_boolean(params["answer"]["plus_one_attending"]),
      plus_one_fullname:    params["answer"]["plus_one_fullname"],
      plus_one_food_choice: params["answer"]["plus_one_food_choice"],
      user_notes: "#{notes} \n--------\n #{params["answer"]['notes']}",
      food_choice: params["answer"]["food_choice"],
      dance_question: params["answer"]["dance_question"]
    )
  end

  def user_updated
    return true unless params["answer"]["password"].present?
    user.password = params["answer"]["password"]
    user.update_attributes(phone: params["answer"]["phone"]) && user.save
  end

  def send_emails
    if(convert_to_boolean(params["answer"]["rsvp"]))
      EventQuestionMailer.new_question(
        user: user, event: event,
        notes: params["answer"]["notes"],
        question: params["answer"]["questions"],
        dance_question: params["answer"]["dance_question"],
        rsvp: true
      ).deliver_now
    else
      EventQuestionMailer.new_question(
        user: user, event: event,
        notes: params["answer"]["notes"],
        question: params["answer"]["questions"],
        dance_question: params["answer"]["dance_question"],
        rsvp: false
      ).deliver_now
    end
  end

  def convert_to_boolean(str)
    return true if (str == "Yes" || str == "true" || str == true)
    return false if (str == "No" || str == "false" || str == false)
  end

  def data
    {
      guest: {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        plus_one_invited: attendee.plus_one_invited,
        id: user.id,
        token: params["id"],
        rsvp: attendee.rsvp,
        password_set: user_password
      },
      event: {
        id: event.id,
        name: event.name,
        date: event.date_string,
        time: event.time,
        description: event.description,
        city: event.city,
        state: event.state,
        rsvp_description: event.rsvp_description,
        food_options: event.food_options,
        dance_question: event.dance_question,
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

  def user_password
    user.password_hash.present?
  end

  def user
    @user ||= attendee.user
  end

  def event
    @event ||= attendee.event
  end
end
