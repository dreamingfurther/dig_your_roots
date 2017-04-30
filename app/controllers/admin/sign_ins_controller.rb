class Admin::SignInsController < ApplicationController
  class UserSignIn
    attr_accessor :email, :password
  end

  def new
    @user_sign_in = UserSignIn.new
  end

  def create
    user = User.find_by(email: params["post"]["email"])
    if user.try(:password) == params["post"]["password"]
      session[:user_id] = user.id
      redirect_to admin_root_path
    else
      flash[:error] = "Wrong Password"
      redirect_to new_admin_sign_in_path
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:error] = "Signed Out"
    redirect_to new_admin_sign_in_path
  end
end
