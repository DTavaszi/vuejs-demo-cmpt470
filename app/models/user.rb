class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :sent_friendships, class_name: 'Friend', foreign_key: 'sender_id'
  has_many :received_friendships, class_name: 'Friend', foreign_key: 'recipient_id'

  def friendships
    sent_friendships.or(received_friendships)
  end
end
