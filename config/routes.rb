Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "welcome#index"

  namespace :admin do
    root to: "events#index"
    resources :events, only: [:index, :show]
    resources :send_invite_email, only: [:update]
    resources :sign_ins, only: [:new, :create, :destroy]
  end

  namespace :api do
    namespace :v1 do
      resources :authorize, only: [:create]
      resources :email_confirmation, only: [:show, :update]
      resources :password_reset, only: [:create, :update]

      resources :users, only: [] do
        resources :events, only: [:index]
      end
    end
  end

  resources :thank_you, only: [:show]
  resources :email_confirmation, only: [:show]
  resources :events, only: [:index, :show]
  resources :vips, only: [:index]
  resource :forgot_password, only: [:show]
  resources :password_reset, only: [:show]
end
