# enum

use 

```sh
#[derive(Debug)]
enum IpAddress{
    V4,
    V6
}
#[derive(Debug)]
enum UsState {
    Alabama,
    Alaska,
}
enum Coin{
    Penny,
    Nickel,
    Dime,
    Quarter(UsState)
}
fn value_in_cents(coin: Coin) -> u8{
    match coin{
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(us_state) => {
            println!("State quarter from {:?}", us_state);
            25
        }
    }
}

fn main() {
    let four =  Coin::Quarter(UsState::Alaska);
    println!("{:?}", value_in_cents(four));
}
```

Option<T>

```sh
fn plus_one(x:Option<i32>) -> Option<i32> {
    match x{
        None => None,
        Some(i) => Some(i +1)
    }
}

fn main() {
    let x = Some(5);
    println!("x = {:?}", x);
    let y = plus_one(x);
    println!("y = {:?}", y);
    let none =  plus_one(None);
    println!("none = {:?}", none);
}
```

match all

```sh
fn main() {
    let v = 0u8;
    match v {
        0 => println!("zero"),
        1 => println!("one"),
        2 => println!("two"),
        3 => println!("three"),
        4 => println!("four"),
        5 => println!("five"),
        _ => ()
    }
}
```

match some 

```sh
fn plus_one(x:Option<i32>) -> Option<i32> {
    match x{
        None => None,
        Some(i) => Some(i +1)
    }
}
```

if let 

```sh
let v = Some(3);
if let Some(3) =v{
    println!("three");
}else{
    println!("not three");
}
```

match if

```sh
let v = Some(3);
match v { 
    Some(3) => println!("three"),
    _ => println!("other")
}
```