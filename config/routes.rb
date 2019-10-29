Rails.application.routes.draw do
<<<<<<< HEAD
<<<<<<< Updated upstream
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
=======
  devise_for :users
  get 'messages/message'
  root to: 'messages#index'
>>>>>>> Stashed changes
=======
  get 'messages/message'
  root to: 'messages#index'
>>>>>>> d83b8cf5b8c04e8d0d19d2a2f24826a8c51e5f3c
end
