FactoryGirl.define do
  factory :event do
    sequence(:name) { |n| "Ceremony & Dinner #{n}" }
    date { Date.parse('2018/01/27') }
    description "Join Jesse & David as they celebrate the sharing of their vows,
      followed by a cocktail/photo hour, and dinner at a restaurant to be announced.
      Transportation from the hotel to all events and back will be provided."
  end
end
