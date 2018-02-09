class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # protect_from_forgery with: :null_session

  def logged_in
    unless current_user
      respond_to do |format|
        format.json { render json: { Message: "Must be logged in" } status: :unauthorized }
      end
    end
  end

end
