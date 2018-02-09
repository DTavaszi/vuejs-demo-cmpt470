class Message < ApplicationRecord
  default_scope { order(created_at: :asc) }
  belongs_to :sender, class_name: 'User'
  belongs_to :recipient, class_name: 'User'

  def messages_after
    sender.messages_with(recipient_id).where('created_at > ?', created_at)
  end

  def messages_before
    sender.messages_with(recipient_id).where('created_at < ?', created_at).last(5)
  end
end
