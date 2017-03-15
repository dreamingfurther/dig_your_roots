class Api::V1::EmailConfirmationController < ApplicationController
  def show
    render json: fake_data, status: 200
  end

  private

  def fake_data
    {
      guest: {
        first_name: "Priscilla",
        last_name: "Tengdin",
        plus_one_invited: true
      },
      event: {
        name: "Ceremony & Dinner",
        date: "1.27.2018",
        time: "6:00pm",
        city: "Marathon",
        state: "FL",
        rsvp_description: "Blah blah heres a description doop doop doop whatever",
        details: {
          address: "Sunset Beach Park",
          logistics: "heres some logistics",
          dress_code: "heres a dress code"
        }
      }
    }
  end
end
