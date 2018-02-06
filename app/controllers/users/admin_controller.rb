class Users::AdminController < ApplicationController

  def index
    puts 'accessing admin index'
		puts 'Current user: '
    puts current_user.try(:username)
    respond_to do |format|
      format.json { render :json => User.all, status: :ok}
    end
  end

end
