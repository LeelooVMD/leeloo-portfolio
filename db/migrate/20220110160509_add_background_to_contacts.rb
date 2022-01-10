class AddBackgroundToContacts < ActiveRecord::Migration[6.0]
  def change
    add_column :contacts, :background, :string
  end
end
