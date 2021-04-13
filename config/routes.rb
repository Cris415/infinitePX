Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :posts, only: [:index]
    end
    # resources :posts, only: [:create, :index, :show, :delete, :put]
    resources :posts, except: [:new, :edit] 
    resource :session, only: [:create, :destroy]
  end
  
  root 'static_pages#root'
end
