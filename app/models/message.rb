class Message < ApplicationRecord
  default_scope { order(id: :asc) }
  belongs_to :sender, class_name: 'User'
  belongs_to :recipient, class_name: 'User'

  validates :message, presence: true
  after_commit :notify

  def messages_after
    sender.messages_with(recipient_id).where('id > ?', id)
  end

  def messages_before
    sender.messages_with(recipient_id).where('id < ?', id).last(5)
  end

  def notify
    MessageNotification.notify(sender_id, recipient_id)
  end
end
