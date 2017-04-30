class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def authorize_admin!
    unless current_user.try(:admin)
      redirect_to new_admin_sign_in_path
    end
  end

  def current_user
    User.find_by(id: session[:user_id])
  end
end
