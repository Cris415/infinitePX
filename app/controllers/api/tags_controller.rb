class Api::TagsController < ApplicationController
  before_action :require_login

  def index
    if params.has_key?(:post_id)
      post = Post.find_by({id: params[:post_id]})

      if !post 
        render json: ['could not find post'], status: 400
        return 
      end

      puts post
      @tags = post.tags
      render :index
    elsif params.has_key?(:query)
      tag = Tag.find_by({name: params[:query]})
      @posts = tag.posts
      render '/api/posts/index'
    else
      @tags = Tag.all
      render :index
    end
  end

  def create
    tags = tag_params[:tags].split(',').map(&:strip)
    @post = Post.find_by({id: tag_params[:post_id]})
    errors = []

    tags.each do |tag|
      newTag = Tag.find_by({name: tag})
  
      if !newTag 
        newTag = Tag.new({name: tag})
        if !newTag.save
          errors << { message: newTag.errors.full_messages}
        end
      end
  
      @tagged = TaggedPost.new({tag_id: newTag.id, post_id: tag_params[:post_id]})
      if !@tagged.save
          errors << {id: newTag.id, message: @tagged.errors.full_messages}
      end
    end
    
    if errors.length > 0 
      render json: errors, status: 400 
    else 
      render '/api/posts/show'
    end

  end


  def destroy
    @post = Post.find_by(id: params[:post_id])
    tagged = TaggedPost.find_by({tag_id: params[:id], post_id: params[:post_id]})

    if current_user[:id] != @post.user_id 
      render json: ['Unauthorized action'], status: 401

    elsif tagged 
      tagged.destroy
      render '/api/posts/show'

    else
      render json: ['Could not find post'], status: 400
    end
  end

  private
  def tag_params
    params.require(:tag).permit(:tag_id, :post_id, :tags)
  end
end
