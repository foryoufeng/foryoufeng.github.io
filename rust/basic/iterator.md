# iterator

basic

```sh
fn main() {
     let mut arr = vec![1,2,3];
     arr.iter_mut().for_each(|item| {*item += 1});
     for item in &arr {
          println!("{}", item);
     }
     let mut double = arr.iter().map(|item| item * 2);
     for item in double {
          println!("{}", item);
     }
}
```