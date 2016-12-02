Rails.application.routes.draw do
  resources :tweets
  devise_for :users

  get 'profile' => 'profile#edit'
  patch 'profile' => 'profile#update'

  root "home#index"
end
