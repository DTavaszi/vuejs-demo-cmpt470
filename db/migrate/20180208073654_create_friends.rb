class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.references :sender, foreign_key: true
      t.references :recipient, foreign_key: true
      t.integer :status

      t.timestamps
    end
  end
end
