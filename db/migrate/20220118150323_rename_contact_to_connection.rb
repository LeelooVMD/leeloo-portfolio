class RenameContactToConnection < ActiveRecord::Migration[6.0]
  def change
    rename_table :contacts, :connections
  end
end
