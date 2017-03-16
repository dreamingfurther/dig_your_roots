class AddEmailCountToAttendees < ActiveRecord::Migration[5.0]
  def change
    add_column :attendees, :email_count, :integer, default: 0, null: false
  end
end
