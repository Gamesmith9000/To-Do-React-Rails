class AddCompletedToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :completed, :boolean
    remove_column :tasks, :completed_at
  end
end
