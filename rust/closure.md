# Closure

basic use

```sh
let expensive_closure = |num|{
    println!("calculating slowly...");
    simulated_expensive_calculation(intensity);
    num
};
expensive_closure(1)
```