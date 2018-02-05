Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    admin: 'users/admin'
  }, defaults: { format: :json }

  namespace :users do
    resources :admin, defaults: { format: :json }
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


#  namespace :users do
#    post '/auth/login', to: 'sessions#create', defaults: { format: :json }
#  end

  root to: 'home#app'
  match "*path", to: "home#app", format: false, via: :get
end
