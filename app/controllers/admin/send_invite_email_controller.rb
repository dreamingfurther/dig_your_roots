class Admin::SendInviteEmailController < Admin::AdminController
  def update
    attendee = Attendee.find(params[:id].to_i)
    attendee.update_attributes(email_count: attendee.email_count + 1)

    EventInviteMailer.new_invite(attendee).deliver_now
    redirect_to(admin_event_path(attendee.event))
  end
end
