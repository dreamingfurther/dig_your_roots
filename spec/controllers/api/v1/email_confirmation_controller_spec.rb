require 'rails_helper'

describe Api::V1::EmailConfirmationController do
  let(:event) do
    create(:event, name: 'Special Event', city: "Hanover", state: "NH",
      date: Date.parse("2018/01/27"), time: "4:35pm", rsvp_description: "Here is the RSVP description",
      food_options: true, dance_question: dance_question
    )
  end
  let(:user) { create(:user, email: 'dreamingfurther@gmail.com', first_name: "David", last_name: "Tengdin") }
  let!(:attendee) { create(:attendee, event: event, user: user, plus_one_invited: false) }
  let(:attendee_id) { attendee.to_param }
  let(:dance_question) { nil }

  describe '#update' do
    let(:rsvp_answer) { true }

    let(:event_answer_data) do
      {
        rsvp: rsvp_answer,
        plus_one_attending: "Yes",
        plus_one_fullname: 'Bob Jones',
        notes: "I like to sing a lot.",
        questions: "What happens with this question?",
        phone: "1231231234",
        password: "foobar",
        password_confirmation: "foobar",
        food_choice: "beef",
        dance_question: "lalala",
        plus_one_food_choice: "chicken"
      }
    end

    before do
      event_question_mailer = double
      allow(EventQuestionMailer).to receive(:new_question).and_return(event_question_mailer)
      allow(event_question_mailer).to receive(:deliver_now)

      post :update, params: { id: attendee_id, answer: event_answer_data }
      attendee.reload
    end

    context 'password is not present' do
      let(:user) { create(:user, password_hash: "hash") }
      let(:event_answer_data) do
        {
          rsvp: rsvp_answer,
          plus_one_attending: "Yes",
          plus_one_fullname: 'Bob Jones',
          notes: "I like to sing a lot.",
          questions: "What happens with this question?",
          phone: "1231231234",
          food_choice: "beef",
          plus_one_food_choice: "chicken"
        }
      end

      it 'does not update the user' do
        expect(user.reload.password_hash).to eq "hash"
      end
    end

    context 'password is present' do
      context 'valid attendee ID' do
        context 'RSVP answer is yes' do
          it 'sends an email with the question text' do
            expect(EventQuestionMailer).to have_received(:new_question).with(
              user: user,
              event: event,
              notes: 'I like to sing a lot.',
              question: 'What happens with this question?',
              dance_question: "lalala",
              rsvp: true
            )
          end
        end

        context 'RSVP answer is no' do
          let(:rsvp_answer) { false }

          it 'sends an email with the question text' do
            expect(EventQuestionMailer).to have_received(:new_question).with(
              user: user,
              event: event,
              notes: 'I like to sing a lot.',
              question: 'What happens with this question?',
              dance_question: "lalala",
              rsvp: false
            )
          end
        end

        it 'returns the user data' do
          expect(JSON.parse(response.body)["email"]).to eq(
            "dreamingfurther@gmail.com"
          )
        end

        it 'returns a 201 status code' do
          expect(response.status).to eq 201
        end

        it 'updates the rsvp status' do
          expect(attendee.rsvp).to eq true
        end

        it 'saves the dance question answer' do
          expect(attendee.dance_question).to eq 'lalala'
        end

        it 'updates the other optional fields' do
          expect(attendee.plus_one_attending).to eq true
          expect(attendee.plus_one_fullname).to eq 'Bob Jones'
        end

        it 'saves the user phone, email, and password' do
          expect(attendee.user.phone).to eq "1231231234"
          expect(attendee.user.password_hash).to_not be_nil
        end

        it 'saves food choice data' do
          expect(attendee.food_choice).to eq 'beef'
          expect(attendee.plus_one_food_choice).to eq 'chicken'
        end
      end

      context 'invalid attendee ID' do
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

  describe '#show' do
    context 'user has password already' do
      before do
        user.password = "password"
        user.save

        create(:event_detail, event: event, name: 'DressCode', body: "Here is a dress code for this event.")
        get :show, params: { id: attendee_id }
      end

      it 'returns password=true data' do
        expect(JSON.parse(response.body)["guest"]["password_set"]).to eq true
      end
    end

    context 'user does not have password already' do
      before do
        create(:event_detail, event: event, name: 'DressCode', body: "Here is a dress code for this event.")
        get :show, params: { id: attendee_id }
      end

      it 'returns password=false data' do
        expect(JSON.parse(response.body)["guest"]["password_set"]).to eq false
      end

      context 'valid ID' do
        let(:formatted_data) {
          {
            "guest" => {
              "email"=>"dreamingfurther@gmail.com",
              "first_name"=>"David",
              "last_name"=>"Tengdin",
              "plus_one_invited"=>false,
              "id"=> user_id,
              "token"=> attendee_id,
              "rsvp"=>nil,
              "password_set"=>false
            },
            "event" => {
              "id"=>event.id,
              "name"=>"Special Event",
              "date"=>"01.27.2018",
              "time"=>"4:35pm",
              "description"=>event.description,
              "city"=>"Hanover",
              "state"=>"NH",
              "rsvp_description"=>"Here is the RSVP description",
              "food_options"=>true,
              "dance_question"=>dance_question,
              "details" => {
                "DressCode"=>"Here is a dress code for this event."
              }
            }
          }
        }

        context 'dance question' do
          let(:attendee_id) { attendee.to_param }
          let(:user_id) { Attendee.find(attendee_id).user.id }
          let(:dance_question) { true }

          it 'returns a 200 status code' do
            expect(response.status).to eq 200
          end

          it 'returns properly formatted data' do
            expect(JSON.parse(response.body)).to eq formatted_data
          end
        end

        context 'no dance question' do
          let(:attendee_id) { attendee.to_param }
          let(:user_id) { Attendee.find(attendee_id).user.id }
          let(:dance_question) { false }

          it 'returns a 200 status code' do
            expect(response.status).to eq 200
          end

          it 'returns properly formatted data' do
            expect(JSON.parse(response.body)).to eq formatted_data
          end
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
end
