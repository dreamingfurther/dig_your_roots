class Api::V1::PasswordResetController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def update
    user = User.find_by(password_reset_token: params["id"])
    if user.present?
      user.password = params["password_reset"]["password"]
      user.update_attributes(password_reset_token: nil) && user.save
      render json: user, status: 200
    else
      render json: { error: 'Invalid Token' }, status: 422
    end
  end

  def create
    user = User.find_by(email: params["email"])
    if user.present?
      uuid = SecureRandom.uuid
      user.update_attributes(password_reset_token: uuid)
      PasswordResetMailer.new_reset(user, uuid).deliver_now
      render json: { password_reset: true }, status: 200
    else
      render json: { error: 'Email does not exist' }, status: 422
    end
  end
end
