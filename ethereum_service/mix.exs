defmodule EthereumService.MixProject do
  use Mix.Project

  def project do
    [
      app: :ethereum_service,
      version: "0.1.0",
      elixir: "~> 1.9",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      mod: {ApiServer, []},
      applications: [:cowboy, :ranch, :ethereumex],
      extra_applications: [:logger],
      env: [
        listen_port: 8080
      ]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:cowboy, "~> 2.6.3"},
      {:poison, "~> 4.0.1"},
      {:ethereumex, "~> 0.4.0"},
      {:exw3, "~> 0.4.4"}
    ]
  end
end
