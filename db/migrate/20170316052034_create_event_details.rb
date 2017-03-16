class CreateEventDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :event_details do |t|
      t.string :name
      t.text :body
      t.belongs_to :event
    end
  end
end
