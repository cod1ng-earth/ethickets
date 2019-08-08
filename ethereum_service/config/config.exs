import Config

config :ethereumex,
  url: "http://192.168.1.46:8545",
  http_options: [timeout: 8000, recv_timeout: 5000]

import_config "#{Mix.env()}.exs"