class CreateMessageNotifications < ActiveRecord::Migration[5.1]
  def change
    create_table :message_notifications do |t|
      t.references :sender, null: false
      t.references :recipient, null: false
      t.boolean :notify, default: false, null: false

      t.timestamps
    end

    add_index :message_notifications, [:sender_id, :recipient_id], unique: true
  end
end
