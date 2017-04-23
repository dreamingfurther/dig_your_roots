class AddFoodChoiceFieldsToAttendees < ActiveRecord::Migration[5.0]
  def change
    add_column :attendees, :food_choice, :text
    add_column :attendees, :plus_one_food_choice, :text
  end
end
