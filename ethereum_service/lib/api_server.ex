defmodule ApiServer do
    def start(type, args) do
        {:ok, _} = :cowboy.start_clear(
            "my_http_listener",
            [{:port, 8080}],
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