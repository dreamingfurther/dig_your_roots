class PasswordResetMailer < ApplicationMailer
  def new_reset(user, uuid)
    @user = user
    @uuid = uuid

    mail(
      to: @user.email,
      subject: "Password Reset for #{@user.first_name} from Jesse & David's Wedding Website"
    )
  end
end
