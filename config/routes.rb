Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'sessions#create', defaults: { format: :json }

  root to: 'home#app'
  match "*path", to: "home#app", format: false, via: :get
end
