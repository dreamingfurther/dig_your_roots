class AddPlusOneInfoToAttendees < ActiveRecord::Migration[5.0]
  def change
    rename_column :attendees, :plus_one, :plus_one_invited
    add_column :attendees, :plus_one_attending, :boolean
    add_column :attendees, :plus_one_fullname, :string
  end
end
