defmodule EthereumServiceTest do
  use ExUnit.Case
  doctest EthereumService

  test "greets the world" do
    assert EthereumService.hello() == :world
  end
end
