require 'rails_helper'

describe Api::V1::EmailConfirmationController do
  describe '#show' do
    let(:user) { create(:user, first_name: "David", last_name: "Tengdin") }
    let(:event) do
      create(:event, name: 'Special Event', city: "Hanover", state: "NH",
        date: Date.parse("2018/01/27"), time: "4:35pm", rsvp_description: "Here is the RSVP description"
      )
    end
    let!(:attendee) { create(:attendee, event: event, user: user, plus_one_invited: false) }

    before do
      create(:event_detail, event: event, name: 'DressCode', body: "Here is a dress code for this event.")
      get :show, params: { id: attendee_id }
    end

    context 'valid ID' do
      let(:attendee_id) { attendee.to_param }
      let(:formatted_data) {
        {
          "guest" => {
            "first_name"=>"David",
            "last_name"=>"Tengdin",
            "plus_one_invited"=>false
          },
          "event" => {
            "name"=>"Special Event",
            "date"=>"01.27.2018",
            "time"=>"4:35pm",
            "city"=>"Hanover",
            "state"=>"NH",
            "rsvp_description"=>"Here is the RSVP description",
            "details" => {
              "DressCode"=>"Here is a dress code for this event."
            }
          }
        }
      }

      it 'returns a 200 status code' do
        expect(response.status).to eq 200
      end

      it 'returns properly formatted data' do
        expect(JSON.parse(response.body)).to eq formatted_data
      end
    end

    context 'invalid ID' do
      let(:attendee_id) { 'foo-bar' }

      it 'returns a 422 status code' do
        expect(response.status).to eq 422
      end

      it 'returns a nicely formatted error message' do
        expect(JSON.parse(response.body)["error"]).to eq(
          "No attendee found for that id"
        )
      end
    end
  end
end
