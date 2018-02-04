class SessionsController < ApplicationController

  def create
    respond_to do |format|
      format.json { render json: { message: "logged in"}, status: :ok }
    end
  end

end
