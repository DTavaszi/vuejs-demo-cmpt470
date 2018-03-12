class MessagesController < ApplicationController
  before_action :logged_in, defaults: { format: :json }

  def index
    if params[:user]
      messages = current_user.messages_with(user_params[:id])
    else
      messages = current_user.messages
    end

    respond_to do |format|
      format.json { render json: messages, status: :ok }
    end
  end

  def create
    message = current_user.messages.new(message_params)

    if message.save
      respond_to do |format|
        format.json { render json: message, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render json: message.errors.full_messages, status: :bad_request }
      end
    end
  end

  def show
    messages = current_user.messages_with_limited(params[:user_id])
    update_notify(params[:user_id], current_user.id)

    respond_to do |format|
      format.json { render json: messages, status: :ok }
    end
  end

  def get_messages_after
    message = Message.find(params[:message_id])
    messages_after = message.messages_after

    sender_id = (message.sender_id == current_user.id) ? message.recipient_id : message.sender_id
    update_notify(sender_id, current_user.id)

    respond_to do |format|
      format.json { render json: messages_after, status: :ok }
    end
  end

  def get_messages_before
    message = Message.find(params[:message_id])
    messages_before = message.messages_before

    respond_to do |format|
      format.json { render json: messages_before, status: :ok }
    end
  end

  protected

  def update_notify sender_id, recipient_id
    message_notification = MessageNotification.find_by(sender_id: sender_id, recipient_id: recipient_id)
    message_notification.update_attribute(:notify, false) if message_notification
  end

  def user_params
    params.require(:user).permit(:id)
  end

  def message_params
    params.require(:message).permit(:recipient_id, :message)
  end
end
