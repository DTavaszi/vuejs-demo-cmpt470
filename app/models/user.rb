class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :sent_friendships, class_name: 'Friend', foreign_key: 'sender_id', dependent: destroy
  has_many :received_friendships, class_name: 'Friend', foreign_key: 'recipient_id', dependent: destroy

  has_many :sent_messages, class_name: 'Message', foreign_key: 'sender_id', dependent: destroy
  has_many :received_messages, class_name: 'Message', foreign_key: 'recipient_id', dependent: destroy

  def friendships
    sent_friendships.or(received_friendships)
  end
end
