Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    get 'search', to: 'posts#search'

    resources :users, only: [:create, :show] do
      resources :posts, only: [:index]
    end
    resources :follows, only: [:create, :destroy]
    resources :posts, except: [:new, :edit] do 
      resources :comments, only: [:index]

    end
    resources :comments, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
  end
  
  root 'static_pages#root'
end
