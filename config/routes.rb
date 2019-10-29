Rails.application.routes.draw do
  get 'messages/message'
  root to: 'messages#index'
end
