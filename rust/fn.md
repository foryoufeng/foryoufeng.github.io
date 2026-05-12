# fun

basic use

```sh
fn add(x:i32,y:i32){
  x + y
}
```

str

```sh
fn main() {
    println!("{}",hello("world"));
}

fn hello(str:&str)->String{
    "hello, ".to_owned() + str
}
```