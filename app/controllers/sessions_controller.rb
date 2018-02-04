class SessionsController < ApplicationController

  def create
    respond_to do |format|
      format.json { head :ok }
    end
  end

end
