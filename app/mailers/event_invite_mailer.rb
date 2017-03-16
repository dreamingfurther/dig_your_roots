class EventInviteMailer < ApplicationMailer
  add_template_helper(ApplicationHelper)

  def new_invite(attendee)
    @attendee = attendee
    @user = attendee.user
    @event = attendee.event

    mail(
      to: @user.email,
      subject: "Placeholder Subject to invite #{@user.fullname}"
    )
  end
end
