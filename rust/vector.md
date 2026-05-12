# Vector

basic use

```sh
let mut v = Vec::new();
v.push(5);
v.push(6);
```

list

```sh
let mut v = vec![1,5,3];
for i in &mut v {
    println!("{}",i);
}
```

filter

```sh
fn main() {
    let mut v = vec![1, 2, 3, 4, 5, 6];
    v.retain(|x| *x > 3);
    println!("{:?}", v);
}
```

VecDeque

```sh
use std::collections::VecDeque;

fn main() {
    let mut vd = VecDeque::with_capacity(6);
    vd.push_back(1);
    vd.push_back(2);
    vd.push_back(3);
    vd.push_front(0);
    vd.push_front(-1);
    vd.push_front(-2);
    println!("{:?}", vd);
}

```