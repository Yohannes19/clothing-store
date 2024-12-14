class RenameAdminsToUsers < ActiveRecord::Migration[7.1]
  def change
    rename_table :admins, :users
  end
end
