class Users::AdminController < ApplicationController

  def index
    respond_to do |format|
      format.json { render :json => User.all, status: :ok}
    end
  end

  def create
    user = User.new(user_params)

    if user.save
      respond_to do |format|
        format.json { render :json => user, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render :json => user.errors.full_messages, status: :bad_request }
      end
    end
  end

  def user_params
    params.require(:user).permit(:email, :username, :password, :admin)
  end
end
