class AddFoodOptionsToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :food_options, :boolean, default: false
  end
end
