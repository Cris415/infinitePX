class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.followed_id = params[:id]
    @follow.follower_id = current_user.id
    @user = current_user;

    if @follow.save
      render 'api/users/show' 
    else
      render json: ['could not be created'], status: 400
    end
  end

  def destroy
    @follow = Follow.find_by({followed_id: params[:id], follower_id: current_user.id})

    @user = current_user;

    if @follow 
      @follow.destroy
      render 'api/users/show' 
    else
      render json: ['could not be found'], status: 404
    end
  end
end
