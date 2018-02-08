class FriendsController < ApplicationController

  def index
    if current_user
      respond_to do |format|
        format.json { render :json => current_user.friendships, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render :json => { message: "Must be logged in" }, status: :unauthorized }
      end
    end
  end

  def create
    if current_user
      friendship = current_user.friendships.new(recipient_id: user_params[:id])

      if friendship.save
        respond_to do |format|
          format.json { render json: friendship, status: :ok }
        end
      else
        respond_to do |format|
          format.json { render json: friendship.errors.full_messages, status: :bad_request}
        end
      end
    else
      respond_to do |format|
        format.json { render json: { message: "Must be logged in." }, status: :unauthorized }
      end
    end
  end

  def destroy
    friend = Friend.find(params[:id])

    if friend
      friend.destroy
      respond_to do |format|
        format.json { render json: friend, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render :json => "Friendship does not exist", status: :bad_request}
      end
    end
  end

  protected

  def user_params
    params.require(:user).permit(:id)
  end
end
