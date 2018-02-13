class AddMessageReferenceToMessageNotifications < ActiveRecord::Migration[5.1]
  def change
    add_reference :message_notifications, :message, foreign_key: true
  end
end
