# hot 

install
```sh
cargo install systemfd cargo-watch
```

add command
```sh
systemfd --no-pid -s http::3000 -- cargo watch -x 'run'
```