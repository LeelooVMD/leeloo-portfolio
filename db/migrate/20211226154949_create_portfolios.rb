class CreatePortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :portfolios do |t|
      t.string :name
      t.string :company
      t.string :url
      t.string :thumbnail
      t.timestamps
    end
  end
end
