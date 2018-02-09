Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    admin: 'users/admin'
  }, defaults: { format: :json }

  namespace :users do
    resources :admin, defaults: { format: :json }
  end

  resources :friends, defaults: { format: :json }
  resources :messages, default: { format: :json }

  root to: 'home#app'
  match "*path", to: "home#app", format: false, via: :get
end
