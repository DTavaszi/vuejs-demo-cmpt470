class MessageNotification < ApplicationRecord
  belongs_to :sender, class_name: 'User'
  belongs_to :recipient, class_name: 'User'

  belongs_to :message, optional: true

  validate :notification_uniqueness

  def notification_uniqueness
    if MessageNotification.where(sender_id: sender_id, recipient_id: recipient_id).any?
      errors.add(:message_notification, " already exists")
    end
  end

  def self.notify(id, sender_id, recipient_id)
    message_notification = MessageNotification.find_by(sender_id: sender_id, recipient_id: recipient_id)

    if message_notification
      message_notification.update_attributes(notify: true, message_id: id)
    else
      message_notification = MessageNotification.create(sender_id: sender_id, recipient_id: recipient_id, notify: true, message_id: id)
    end
  end

end
