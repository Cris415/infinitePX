include Pagy::Backend

class Api::PostsController < ApplicationController
  before_action :require_login, only: [:create, :destroy, :update]

  def index
    if params.has_key?(:user_id)
      @posts = Post.where(user_id: params[:user_id])
    else
      # https://ddnexus.github.io/pagy/extras/metadata.html#gsc.tab=0
      # @pagy, @records = pagy(Product.my_scope, some_option: 'get merged in the pagy object')
      @pagy, @posts = pagy(Post.all, {items: 5, offset: :offset})
    end
    render :index
  end

  def show
    @post = Post.find_by(id: params[:id])
    if @post 
      render :show
    else
      render json: ['not found'], status: 404
    end
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

    if current_user.id != @post.user_id
      render json: ['Unauthorized action'], status: 401
    elsif @post && @post.update(post_params)
      render :show
    elsif !@post
      render json: ['Could not find post'], status: 400
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def destroy 
    @post = Post.find_by(id: params[:id])

    if current_user.id != @post.user_id
      render json: ['Unauthorized action'], status: 401
    elsif @post
      @post.destroy
      render :show
    else
      render json: ['Could not find post'], status: 400
    end
  end

  def search
    if params[:tag] 
      # find the tag in the DB
      tag = Tag.find_by({name: params[:tag]})
      # get posts that contain the tag
      if tag 
        @posts = tag.posts
        render :index
      else
        render json: {}, status: 200
      end
    else
      query = params[:query].downcase
      by_name = Post.where("lower(title) LIKE ? ", "%#{query}%")
      
      tag = Tag.find_by({name: query})
      if tag 
        by_tag = tag.posts
      else
        by_tag = []
      end
      
      post_arr = [].concat(by_tag, by_name)
      @posts = Post.where(id: post_arr.map(&:id))

      render :index
    end
    
  end

  private
  
  def post_params
    params.require(:post).permit(:title, :description, :user_id, :photo, :offset)
  end 
end
