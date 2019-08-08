FROM elixir
WORKDIR /usr/source/myapp
COPY . /usr/source/myapp
RUN yes | mix local.hex  \ 
    #&& mix \
   && yes | mix deps.get \
   && mix release

#CMD ["iex","-S","mix"]   
CMD ["/usr/local/bin/mix", "run", "--no-halt"]
#CMD ["/usr/source/myapp/_build/dev/rel/ethereum_service/bin/ethereum_service", "start"]

