Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#app'
  match "*path", to: "home#app", format: false, via: :get
  # get '/*path', to: 'home#app'
end
