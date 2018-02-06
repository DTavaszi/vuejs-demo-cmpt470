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

  def destroy
    user = User.find(params[:id])

    if user
      user.destroy
      respond_to do |format|
        format.json { render json: user, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render :json => "User does not exist", status: :bad_request}
      end
    end
  end

  protected

  def user_params
    params.require(:user).permit(:email, :username, :password, :admin)
  end

end
