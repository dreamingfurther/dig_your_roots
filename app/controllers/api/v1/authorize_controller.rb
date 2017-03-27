class Api::V1::AuthorizeController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    user = User.find_by(email: user_params["email"])
    if user.try(:password) == user_params["password"]
      render json: user, status: 200
    else
      render json: { error: "Unathorized" }, status: 401
    end
  end

  private

  def user_params
    @user_params ||= params["user"]
  end
end
