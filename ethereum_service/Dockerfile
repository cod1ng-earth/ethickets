FROM elixir
WORKDIR /usr/source/myapp
COPY . /usr/source/myapp
RUN  mix local.rebar --force \
   &&  mix local.hex --force \ 
   && yes | mix deps.get

#CMD ["iex","-S","mix"]   
CMD ["/usr/local/bin/mix", "run", "--no-halt"]
#CMD ["/usr/source/myapp/_build/dev/rel/ethereum_service/bin/ethereum_service", "start"]

