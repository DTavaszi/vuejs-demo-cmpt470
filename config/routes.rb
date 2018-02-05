Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/sessions'
      }, defaults: { format: :json }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


#  namespace :users do
#    post '/auth/login', to: 'sessions#create', defaults: { format: :json }
#  end

  root to: 'home#app'
  match "*path", to: "home#app", format: false, via: :get
end
