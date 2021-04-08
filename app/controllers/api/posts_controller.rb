class Api::PostsController < ApplicationController
  before_action :require_login, only: [:create]

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :description, :user_id)
  end 
end
