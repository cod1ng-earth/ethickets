defmodule EventHandler do
    def init(request, state) do
        {:cowboy_rest, request, state}
    end

    def allowed_methods(request, state) do
        {[<<"POST">>], request, state}
    end

    def content_types_accepted(request, state) do
        {[{"application/json", :from_json}], request, state}
    end

    def from_json(request, state) do
        {:ok, body, request} = :cowboy_req.read_body(request)
        {:ok, jsonMap} = Poison.decode(body)

        address = jsonMap["address"]
        # Call gateway to Ethereum
        EthereumGateway.compileContract()
        # Receiver contract address
        contractAddress = DateTime.to_string(DateTime.utc_now())

        httpHost = :cowboy_req.host(request)
        {
            {true, "#{httpHost}/event/#{contractAddress}"}, 
            request, 
            state
        }
    end

    def content_types_provided(request, state) do
        {[{"application/json", :to_json}], request, state}
    end

    def to_json(request, state) do
        {"{}", request, state}
    end

    def resource_exists(request, state) do
        {false, request, state}
    end

    def terminate(_reason, _request, _state) do
        :ok
    end
end