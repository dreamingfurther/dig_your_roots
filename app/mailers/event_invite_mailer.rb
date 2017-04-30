class EventInviteMailer < ApplicationMailer
  add_template_helper(ApplicationHelper)

  def new_invite(attendee)
    @attendee = attendee
    @user = attendee.user
    @event = attendee.event

    mail(
      to: @user.email,
      subject: "RSVP #{@event.name} Invitation for the marriage of Jesse and David"
    )
  end
end
