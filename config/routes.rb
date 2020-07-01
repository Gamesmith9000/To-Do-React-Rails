Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    resources :tasks, only: [:index, :create, :update, :destroy]
  end
  
  # [NOTE] Verify that this is necessary within the smaller scope of routing for this app
  get '*path', to: 'pages#index', via: :all
end
