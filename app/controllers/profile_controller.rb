class ProfileController < ApplicationController
  before_action :authenticate_user!
  def edit
    @user = current_user
  end

  def update
    current_user.update!(user_params)
    redirect_to root_path
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name)
  end
end
