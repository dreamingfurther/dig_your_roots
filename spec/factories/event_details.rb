FactoryGirl.define do
  factory :event_detail do
    sequence(:name) { |n| "Name-#{n}" }
    sequence(:body) { |n| "Detail Body text #{n}" }
    event
  end
end
