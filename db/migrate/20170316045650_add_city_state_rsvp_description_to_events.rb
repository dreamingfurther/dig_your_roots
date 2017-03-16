class AddCityStateRsvpDescriptionToEvents < ActiveRecord::Migration[5.0]
  def change
    rename_column :events, :hour, :time
    add_column :events, :city, :string
    add_column :events, :state, :string
    add_column :events, :rsvp_description, :text
  end
end
