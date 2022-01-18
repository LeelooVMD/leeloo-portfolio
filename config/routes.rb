Rails.application.routes.draw do
  root to: 'pages#home'
  get 'download_pdf', to: "pages#download_pdf"
  resources :portfolios, only: [:index, :show]
  resources :connections, only: [:index, :show]
  resources :contacts, only: [:new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
