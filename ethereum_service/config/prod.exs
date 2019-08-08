import Config

config :ethereum_service, :listen_port, System.fetch_env!("PORT")