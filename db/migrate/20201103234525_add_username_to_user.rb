class AddUsernameToUser < ActiveRecord::Migration[6.0]
  def change
    # add_column :table, :column_name, :data_type
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
  end
end
