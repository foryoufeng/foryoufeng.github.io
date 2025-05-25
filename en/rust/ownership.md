# ownership

basic

```sh
fn main() {
    let x = String::from("hello");
    let len = len(&x);
    println!("x: {}, len: {}", x, len);
}
fn len(s:&String)->usize{
     s.len()
}
```

mut reference

```sh
fn main() {
    let mut x = String::from("hello");
    let len = len(&mut x);
    println!("x: {}, len: {}", x, len);
}
fn len(s:&mut String)->usize{
     s.push_str(", world");
     s.len()
}
```

error reference,blow code will not be compiled

```sh
fn refer()-> &String{
    let s = String::from("hello");
    &s
}
```