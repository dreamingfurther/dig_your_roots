FactoryGirl.define do
  factory :event do
    sequence(:name) { |n| "Ceremony & Dinner #{n}" }
    sequence(:time) { |n| "#{n+1}:00pm" }
    sequence(:city) { |n| "Marathon-#{n}" }
    sequence(:state) { |n| "FL-#{n}" }
    date { Date.parse('2018/01/27') }
    description "Join Jesse & David as they celebrate the sharing of their vows,
      followed by a cocktail/photo hour, and dinner at a restaurant to be announced.
      Transportation from the hotel to all events and back will be provided."
  end
end
