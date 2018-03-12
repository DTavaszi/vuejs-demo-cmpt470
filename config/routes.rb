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
  resources :messages, except: [:show], defaults: { format: :json }
  resources :message_notifications, only: [:create, :index, :update], defaults: { format: :json }

  get 'get_messages_with/:user_id', to: 'messages#show', defaults: { format: :json }
  get 'get_messages_after/:message_id', to: 'messages#get_messages_after', defaults: { format: :json }
  get 'get_messages_before/:message_id', to: 'messages#get_messages_before', defaults: { format: :json }

  root to: 'home#app'
  match "*path", to: "home#app", format: false, via: :get
end
