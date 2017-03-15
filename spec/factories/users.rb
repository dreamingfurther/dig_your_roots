FactoryGirl.define do
  factory :user do
    sequence(:first_name) { |n| "Jesse #{n}" }
    sequence(:last_name) { |n| "Norris #{n}" }
    sequence(:email) { |n| "dtjrnorris+#{n}@gmail.com" }
  end
end
