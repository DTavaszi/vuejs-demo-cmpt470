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

  def get_messages_after
    message = Message.find(message_params[:id])
    messages_after = message.messages_after

    respond_to do |format|
      format.json { render json: messages_after, status: :ok }
    end
  end

  def get_messages_before
  end

  protected

  def user_params
    params.require(:user).permit(:id)
  end

  def message_params
    params.require(:message).permit(:recipient_id, :message)
  end
end
