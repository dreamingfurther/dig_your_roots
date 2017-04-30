require 'rails_helper'

describe Admin::EventsController do
  let!(:user) { create(:user, admin: admin) }
  let!(:event) { create(:event) }

  before(:each) do
    controller.session[:user_id] = user.id
  end

  after(:each) do
    controller.session[:user_id] = nil
  end

  context 'signed in as an admin' do
    let(:admin) { true }

    describe '#index' do
      it 'renders all events' do
        get :index
        expect(assigns(:events)).to eq(Event.all)
        expect(assigns(:events).count).to eq(1)
      end
    end

    describe '#show' do
      it 'redirects to the home page' do
        get :show, params: { id: event.id }
        expect(assigns(:event)).to eq(event)
      end
    end
  end

  context 'not signed in as an admin' do
    let(:admin) { false }

    describe '#index' do
      it 'redirects to the home page' do
        get :index
        expect(response).to redirect_to(new_admin_sign_in_path)
      end
    end

    describe '#show' do
      it 'redirects to the home page' do
        get :show, params: { id: event.id }
        expect(response).to redirect_to(new_admin_sign_in_path)
      end
    end
  end
end
