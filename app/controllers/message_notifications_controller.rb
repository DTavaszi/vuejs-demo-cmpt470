class MessageNotificationsController < ApplicationController
  before_action :logged_in, defaults: { format: :json }

  def create
    message_notification = current_user.message_notifications.new(message_params)

    if message_notification.save
      format.json { render json: message_notification, include: { message: { only: :message }}, status: :ok}
    else
      respond_to do |format|
        format.json { render json: message_notification.errors.full_messages, status: :bad_request}
      end
    end
  end

  def index
    message_notifications = current_user.message_notifications

    respond_to do |format|
      format.json { render json: message_notifications, include: { message: { only: :message }}, status: :ok }
    end
  end

  def update
    message_notification = current_user.find_by(message_notification_params)

    if message_notification.any? && message_notification.update_all(notify: false)
    else
      current_user.message_notifications.create(sender_id: user_params[:id], notify: false)
    end

    head :ok
  end

  protected

  def user_params
    params.require(:user).permit(:id)
  end

  def message_notification_params
    params.require(:message_notification).permit(:id, :sender_id)
  end
end
