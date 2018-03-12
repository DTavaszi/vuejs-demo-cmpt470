class Friend < ApplicationRecord
  belongs_to :sender, class_name: 'User'
  belongs_to :recipient, class_name: 'User'

  validate :friendship_uniqueness

  def friendship_uniqueness
    if Friend.where(sender_id: sender_id, recipient_id: recipient_id).any?
      errors.add(:friendship, " already requested")
    end
  end
end
