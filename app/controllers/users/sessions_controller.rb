# frozen_string_literal: true
class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    user = User.find_by(:username => params[:session][:username])

    if user && user.valid_password?(params[:session][:password])
      puts "valid password"
      sign_in("user", user)
      puts "signed in"
      respond_to do |format|
        format.json { render :json => { success: true }, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render :json => { success: false }, status: :unauthorized }
      end
    end
    # super
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

  def invalid_login_attempt
    puts "invalid login attempt"
    respond_to do |format|
      format.json { render :json => { success: false, message: "Invalid username or password"}, status: :unauthorized }
    end
  end
end
