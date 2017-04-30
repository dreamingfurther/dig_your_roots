require 'rails_helper'

describe Api::V1::PasswordResetController do
  describe '#create' do
    let!(:user) { create(:user) }

    before do
      password_reset_mailer = double
      allow(PasswordResetMailer).to receive(:new_reset).and_return(password_reset_mailer)
      allow(password_reset_mailer).to receive(:deliver_now)
      post :create, params: { email: email }
      user.reload
    end

    context 'user exists' do
      let(:email) { user.email }

      it 'sets a reset token on the user' do
        expect(user.password_reset_token).not_to eq nil
      end

      it 'calls the password reset mailer' do
        expect(PasswordResetMailer).to have_received(:new_reset).with(user, String)
      end

      it 'returns 200' do
        expect(response.status).to eq 200
      end
    end

    context 'user does not exist' do
      let(:email) { 'foo@foo.com' }

      it 'returns a userful error' do
        expect(JSON.parse(response.body)["error"]).to eq "Email does not exist"
      end

      it 'returns a 422' do
        expect(response.status).to eq 422
      end
    end
  end
end
