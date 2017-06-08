class AddDanceQuestionToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :dance_question, :boolean, default: false
  end
end
