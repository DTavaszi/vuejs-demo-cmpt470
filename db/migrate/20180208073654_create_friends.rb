class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.references :sender
      t.references :recipient
      t.integer :status

      t.timestamps
    end

    add_index :friends, [:sender_id, :recipient_id], unique: true
  end
end
