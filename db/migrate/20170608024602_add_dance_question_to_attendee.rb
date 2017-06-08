class AddDanceQuestionToAttendee < ActiveRecord::Migration[5.0]
  def change
    add_column :attendees, :dance_question, :text
  end
end
