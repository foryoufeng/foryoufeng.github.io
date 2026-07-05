# closure

basic

```sh
fn main() {
     let func = |x: i32| x * x;
     println!("{}", func(5));

}
```

capturing environment


```sh
let mut x = 10;
let mut print_x = || {
  x += 1;
  println!("x = {}", x);
};
print_x();
print_x();
```

move

```sh
     let mut x = 10;
     let mut print_x = move  || {
          x += 1;
          println!("x = {}", x);
     };
     print_x();
     print_x();
     println!("x={}",x);
```

closure param

```sh


fn apply(f: fn(i32)->i32, x: i32) ->i32{
     f(x)
}
fn main() {
     let func = |x|  x + 1;
     let result = apply(func,2);
     println!("{}",result);
}

```

generics function

```sh
fn apply<T,Y>(f: T, x: Y) ->Y
where T: Fn(Y)->Y
{
     f(x)
}
fn main() {
     let y = 10 ;
     let func = |x|  x + y;
     let result = apply(func,2);
     println!("{}",result);
}
```

trait closure

```sh

struct Tax{
     cal : Box<dyn Fn(i32) -> i32>
}
impl Tax{
     fn new(cal: Box<dyn Fn(i32) -> i32>) -> Self{
          Self{
               cal
          }
     }
     fn calc(&self, amount: i32) -> i32{
          (self.cal)(amount)
     }
}
fn main() {
     let tax = Tax::new(Box::new(|amount| amount * 10 / 100));
     let tax2 = Tax::new(Box::new(|amount| amount * 8 / 100));
     println!("{}", tax.calc(1000));
     println!("{}", tax2.calc(1000));
}
```

change to generics trait closure

```sh


struct Tax<T: Fn(i32) -> i32>{
     cal : T
}
impl<T: Fn(i32) -> i32>  Tax<T>{
     fn new(cal: T) -> Self{
          Self{
               cal
          }
     }
     fn calc(&self, amount: i32) -> i32{
          (self.cal)(amount)
     }
}
fn main() {
     let tax = Tax::new(|amount| amount * 10 / 100);
     let tax2 = Tax::new(|amount| amount * 8 / 100);
     println!("{}", tax.calc(1000));
     println!("{}", tax2.calc(1000));
}

```

