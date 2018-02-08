 # frozen_string_literal: true
class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    if current_user
      respond_to do |format|
        format.json { render :json => current_user, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render :json => { success: false }, status: :unauthorized }
      end
    end
   # super
  end

  # POST /resource/sign_in
  def create
    user = User.find_by(:email => params[:session][:email])

    if user && user.valid_password?(params[:session][:password])
      puts "Valid password"
      sign_in("user", user)
      puts "Signed in"
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
  def destroy
    puts "Found user. Logging out: #{ current_user.try(:username) }"

    sign_out(current_user)
    respond_to do |format|
      format.json { render :json => { message: "Signed out successfully." }, status: :ok}
    end
   # super
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_

  def verify_signed_out_user
    if all_signed_out?
      puts "Not currently logged in"
      respond_to do |format|
        format.json { render :json => { message: "Not logged in." }, status: :unauthorized }
      end
    end
  end

  def invalid_login_attempt
    puts "invalid login attempt"
    respond_to do |format|
      format.json { render :json => { success: false, message: "Invalid username or password"}, status: :unauthorized }
    end
  end
end
