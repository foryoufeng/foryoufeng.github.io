# iter

basic use

```sh
#[test]
fn it_iter() {
    let v = vec![1, 2, 3];
    let mut iter = v.iter();
    assert_eq!(iter.next(), Some(&1));
    assert_eq!(iter.next(), Some(&2));
    assert_eq!(iter.next(), Some(&3));
    assert_eq!(iter.next(), None);
}
```

sum

```sh
#[test]
fn it_sum() {
    let v = vec![1, 2, 3];
    let sum = v.iter().sum::<i32>();
    assert_eq!(sum, 6);
}
```

map

```sh
#[test]
fn it_map() {
    let v = vec![1, 2, 3];
    let v2: Vec<_> = v.iter().map(|x|{
        x + 1
    }).collect();
    let iter = v2.iter();
    for value in iter {
        println!("{}", value);
    }
}
```

filter

```sh
#[test]
fn it_filter() {
    let v = vec![1, 2, 3];
    let v2: Vec<_> = v.iter().filter(|x|{
       x> &&1
    }).collect();
    let iter = v2.iter();
    for value in iter {
        println!("{}", value);
    }
}
```

