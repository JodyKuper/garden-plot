Rails.application.routes.draw do
  resources :gardens
  resources :plots
  resources :plants
  resources :users

  post '/signup', to: "users#create"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show" 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
