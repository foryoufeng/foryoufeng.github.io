# HashMap


basic

```sh
use std::collections::HashMap;

fn main() {
    let mut price = HashMap::new();
    price.insert("apple", 5);
    price.insert("orange", 3);
    price.insert("banana", 2);
    price.insert("pear", 4);
    price.insert("grape", 6);
    println!("{:?}", price);
    for key in price.keys() {
        println!("key={},val={}", key, price[key]);
    }
}

```


```sh
let mut h = HashMap::new();
h.insert(String::from("key"), 5);
h.insert(String::from("yellow"), 10);
h.entry(String::from("blue")).or_insert(2);
for (k, v) in &h {
    println!("{}: {}", k, v);
}
```
