class TweetsController < ApplicationController
  before_action :authenticate_user!
  def index
    @tweets = Tweet.all.ordered
    render json: @tweets
  end

  def create
    @tweet = Tweet.create!(tweet_params)
    render json: @tweet
  end

  private

  def tweet_params
    set_user
    params.permit(:user_id, :body)
  end

  def set_user
    params[:user_id] = current_user.id
  end
end
