require 'rails_helper'

describe Api::V1::EventsController do
  describe '#index' do
    it 'returns json data of events' do
      user = create(:user)
      event1 = create(:event, name: 'Ceremony & Dinner', picture: 'picture.png')
      event2 = create(:event, name: 'Stag party')
      create(:event_detail, event: event1, name: 'Address')
      create(:event_detail, event: event1, name: 'Logistics')
      create(:attendee, user: user, event: event1)
      create(:attendee, user: user, event: event2)

      get :index, params: { user_id: user.id }
      json = JSON.parse(response.body)
      expect(json[1]["name"]).to eq("Stag party")
      expect(json[0]["name"]).to eq("Ceremony & Dinner")
      expect(json[0]["description"]).to eq(event1.description)
      expect(json[0]["picture"]).to eq('picture.png')
      expect(json[0]["details"]).to eq(
        {
          "Address"=>"Detail Body text 1",
          "Logistics"=>"Detail Body text 2"
        }
      )
    end
  end
end
