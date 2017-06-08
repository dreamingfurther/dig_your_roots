class EventQuestionMailer < ApplicationMailer
  add_template_helper(ApplicationHelper)

  def new_question(user:, event:, notes:, question:, dance_question:, rsvp:)
    @user = user
    @event = event
    @notes = notes
    @question = question
    @dance_question = dance_question
    @rsvp = rsvp ? 'Accepted' : 'Declined'

    mail(
      to: ADMIN_HOME_EMAIL,
      from: @user.email,
      subject: "RSVP #{event.name}: #{@rsvp} - from #{@user.first_name}"
    )
  end
end
