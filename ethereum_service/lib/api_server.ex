defmodule ApiServer do
    def start(type, args) do
        httpPort = String.to_integer(
            Application.fetch_env!(:ethereum_service, :listen_port)
        )
        {:ok, _} = :cowboy.start_clear(
            "my_http_listener",
            [{:port, httpPort}],
            %{
                :env => %{
                    :dispatch => :cowboy_router.compile([{
                        :_, [
                            {"/event", EventHandler, []},
                            {"/ticket", TicketHandler, []}
                        ]
                    }])
                }
            }
      )
    end
  end