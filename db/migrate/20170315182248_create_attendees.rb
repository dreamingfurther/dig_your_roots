class CreateAttendees < ActiveRecord::Migration[5.0]
  def change
    create_table :attendees do |t|
      t.belongs_to :user, null: false
      t.belongs_to :event, null: false
      t.boolean :rsvp
      t.text :user_notes
      t.text :admin_notes

      t.timestamps
    end
  end
end
