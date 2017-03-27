require 'rails_helper'

describe Api::V1::AuthorizeController do
  describe '#post' do
    let(:user) do
      create(:user,
        first_name: 'Random',
        last_name: 'TestUser',
        email: 'test@test.com',
        phone: 1231231234
      )
    end
    before { user.password = 'password'; user.save }

    context 'an authorized user' do
      before do
        post :create, params: { user: { email: 'test@test.com', password: 'password' }}
      end

      it 'returns a 200 status code' do
        expect(response.status).to eq 200
      end

      it 'returns serialized user data' do
        user_data = JSON.parse(response.body)
        expect(user_data["first_name"]).to eq 'Random'
        expect(user_data["last_name"]).to eq 'TestUser'
        expect(user_data["email"]).to eq 'test@test.com'
        expect(user_data["phone"]).to eq '1231231234'
        expect(user_data["admin"]).to eq false
      end
    end

    context 'an unathorized user' do
      before do
        post :create, params: { user: { email: 'test@test.com', password: 'wrongpassword' }}
      end

      it 'returns a 401 status code' do
        expect(response.status).to eq 401
      end

      it 'returns an Unathorized error message' do
        expect(JSON.parse(response.body)["error"]).to eq "Unathorized"
      end
    end
  end
end
