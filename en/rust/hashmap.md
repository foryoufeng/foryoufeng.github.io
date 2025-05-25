# HashMap


```sh
let mut h = HashMap::new();
h.insert(String::from("key"), 5);
h.insert(String::from("yellow"), 10);
h.entry(String::from("blue")).or_insert(2);
for (k, v) in &h {
    println!("{}: {}", k, v);
}
```