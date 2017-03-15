require 'rails_helper'

describe Event do
  let(:event) { create(:event) }

  before do
    create(:attendee, event: event, rsvp: true)
    create(
      :attendee,
      event: event,
      rsvp: true,
      plus_one_invited: true,
      plus_one_attending: true
    )
    create(
      :attendee,
      event: event,
      rsvp: true,
      plus_one_invited: true,
      plus_one_attending: false
    )

    create(:attendee, event: event, rsvp: false)

    create(:attendee, event: event)
    create(
      :attendee,
      event: event,
      plus_one_invited: true
    )
  end


  describe '#invited_count' do
    it 'returns the count of all invited attendees' do
      expect(event.invited_count).to eq 7
    end
  end

  describe '#confirmed_count' do
    it 'returns the count of all attending attendees' do
      expect(event.confirmed_count).to eq 4
    end
  end

  describe '#declined_count' do
    it 'returns the count of all declined attendees' do
      expect(event.declined_count).to eq 1
    end
  end

  describe '#declined_plus_one_count' do
    it 'returns the count of all declined plus ones' do
      expect(event.declined_plus_one_count).to eq 1
    end
  end

  describe '#unconfirmed_count' do
    it 'returns the count of all unconfirmed attendees' do
      expect(event.unconfirmed_count).to eq 3
    end
  end
end
