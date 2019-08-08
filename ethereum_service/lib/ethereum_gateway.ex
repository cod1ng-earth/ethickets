defmodule EthereumGateway do
    def compileContract do
        case {code, version} = Ethereumex.HttpClient.web3_client_version() do
            {:ok, _} -> :logger.debug(version)
            {:error, _} -> :logger.debug(version)
            {_, _} -> :logger.debug(code)
        end
    end
end
