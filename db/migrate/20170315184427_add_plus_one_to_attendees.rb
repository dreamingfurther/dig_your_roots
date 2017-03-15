class AddPlusOneToAttendees < ActiveRecord::Migration[5.0]
  def change
    add_column :attendees, :plus_one, :boolean, default: false, null: false
  end
end
