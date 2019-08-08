defmodule TicketHandler do
    def init(request, state) do
        {:cowboy_rest, request, state}
    end

    def terminate(_reason, _request, _state) do
        :ok
    end
end