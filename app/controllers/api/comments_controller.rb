class Api::CommentsController < ApplicationController
  before_action :require_login

  def index
    if params.has_key?(:post_id)
      @comments = Comment.where(post_id: params[:post_id])
    else
      @comments = Comment.all
    end
    render :index
  end

  def show
    @comment = Post.find_by(id: params[:id])
    if @comment
      render :show
    else
      render json: ['not found'], status: 404
    end
  end

  def create
    newComment = comment_params;
    newComment['author_id'] = current_user.id
    @comment = Comment.new(newComment)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])

    if current_user.id != @comment.author_id
      render json: ['Unauthorized action'], status: 401
    elsif @comment && @comment.update(comment_params)
      render :show
    elsif !@comment 
      render json: ['Could not find comment'], status: 400
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    print "comment"
    print @comment
    # if current_user.id != @comment[author_id]
    if current_user.id != @comment.author_id
      render json: ['Unauthorized action'], status: 401
    elsif @comment
      @comment.destroy
      render :show
    else
      render json: ['Could not find comment'], status: 400
    end
  end

  private 

  def comment_params
    params.require(:comment).permit(:comment, :post_id)
  end
end
