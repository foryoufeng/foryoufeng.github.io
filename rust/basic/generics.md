# generics

basic

```sh
use std::cmp::PartialOrd;
fn find_max<T: PartialOrd + Copy>(v: &[T]) -> Option<T> {
    if v.is_empty() {
        return None;
    }
    let mut max = v[0];
    for &n in v {
        if n > max {
            max = n;
        }
    }
    Some(max)
}
fn main() {
    let v = vec![1, 2, 3, 4, 5];
    println!("{:?}", find_max(&v));
}

```

more params

```sh
fn combine<T>(a: T, b: T) -> Vec<T> {
    let mut v = Vec::new();
    v.push(a);
    v.push(b);
    v
}
fn main() {
    println!("{:?}", combine::<i32>(1, 2));
    println!("{:?}", combine("a", "b"));
}
```

more generics

```sh
#[derive(Debug)]
struct Pair<T, U> {
    first: T,
    second: U,
}
impl<T, U> Pair<T, U> {
    fn new(first: T, second: U) -> Self {
        Pair { first, second }
    }
}
fn main() {
    let p = Pair::new(1, 2);
    println!("{:?}", p);
    let p2 = Pair::new(1, "world");
    println!("{:?}", p2);
}

```