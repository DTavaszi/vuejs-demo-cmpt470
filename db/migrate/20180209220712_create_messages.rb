class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.references :sender
      t.references :recipient
      t.string :message, null: false

      t.timestamps
    end

    add_index :messages, [:sender_id, :recipient_id]
  end
end
