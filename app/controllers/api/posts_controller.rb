class Api::PostsController < ApplicationController
  before_action :require_login, only: [:create, :destroy, :update]

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

  def update
    @post = Post.find_by(id: params[:id])
    if @post && @post.update(post_params)
      render :show
    elsif !@post
      render json: ['Could not find post'], status: 400
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def destroy 
    @post = Post.find_by(id: params[:id])
    if @post
      @post.destroy
      render :show
    else
      render json: ['Could not find post'], status: 400
    end
  end

  private
  
  def post_params
    params.require(:post).permit(:title, :description, :user_id, :photo)
  end 
end
