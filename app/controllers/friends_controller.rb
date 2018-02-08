class FriendsController < ApplicationController

  def create
  end

  def destroy
  end

  protected

  def friends_param
    params.require(:friend).permit(:recipient_id, :status)
  end
end
