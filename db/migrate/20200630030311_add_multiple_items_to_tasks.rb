class AddMultipleItemsToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :completed_at, :timestamp, default: nil
    add_column :tasks, :description, :text
    add_column :tasks, :notes, :text, array: true, default: []
    add_column :tasks, :title, :string
  end
end
