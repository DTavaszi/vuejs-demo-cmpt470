class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :sent_friendships, class_name: 'Friend', foreign_key: 'sender_id', dependent: :destroy
  has_many :received_friendships, class_name: 'Friend', foreign_key: 'recipient_id', dependent: :destroy

  has_many :sent_messages, class_name: 'Message', foreign_key: 'sender_id', dependent: :destroy
  has_many :received_messages, class_name: 'Message', foreign_key: 'recipient_id', dependent: :destroy

  has_many :message_notifications, class_name: 'MessageNotification', foreign_key: 'recipient_id', dependent: :destroy

  NUMBER_OF_EXPECTED_MESSAGES = 25

  def friendships
    sent_friendships.or(received_friendships)
  end

  def messages
    sent_messages.or(received_messages)
  end

  def messages_with friend_id
    sent_messages.where(recipient_id: friend_id).or(received_messages.where(sender_id: friend_id))
  end

  def messages_with_after friend_id, message_id
    (sent_messages.where(recipient_id: friend_id).where('id > ?', message_id)).or(received_messages.where(sender_id: friend_id).where('id > ?', message_id))
  end

  def messages_with_limited friend_id
    messages_with(friend_id).last(NUMBER_OF_EXPECTED_MESSAGES)
  end
end
