class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.date :date, null: false
      t.string :hour
      t.text :description
    end
  end
end
