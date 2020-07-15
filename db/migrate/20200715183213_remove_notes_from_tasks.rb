class RemoveNotesFromTasks < ActiveRecord::Migration[6.0]
  def change
    remove_column :tasks, :notes
  end
end
