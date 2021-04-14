class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.followed_id = params[:user_id]
    @follow.follower_id = current_user.id
    if @follow.save
      render 'api/users/show' 
    else
      render json: ['could not be created'], status: 400
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render json: {id: params[:id]}
  end
end
