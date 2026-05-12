# struct


```sh
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}
```

basic use

```sh
#[derive(Debug)]
struct Rectangle{
    width: u32,
    height: u32,
}

fn main() {
    let rec = Rectangle{
        width: 30,
        height: 50,
    };
    println!("{}", area(&rec));
    println!("{:#?}",rec);
}

fn area(rec:&Rectangle) -> u32 {
    rec.width * rec.height
}
```

struct fun

```sh
#[derive(Debug)]
struct Rectangle{
    width: u32,
    height: u32,
}

impl Rectangle{
    fn new(width: u32, height:u32) -> Self{
          Self  {
            width,
            height,
          }
    }
    fn area(&self) -> u32 {
        self.width * self.height
    }
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
    fn square(size: u32) -> Rectangle {
        Rectangle{
            width:size,
            height:size
        }
    }
}
fn main() {
    let rec = Rectangle{
        width: 30,
        height: 50,
    };
    let rec2 = Rectangle::new(30,50);
    println!("{}", rec.area());
    println!("{}",rec.can_hold(&rec2));
    println!("{:#?}",rec);
    println!("{:#?}",Rectangle::square(3));
}
```


```sh
struct Point<T,U>{
    x: T,
    y: U
}
impl <T,U> Point<T,U>{
    fn x(&self) -> &T{
        &self.x
    }
    fn mixup<V,W>(self,other:Point<V,W>) -> Point<T,W>{
        Point{
            x:self.x,
            y:other.y
        }
    }
}
fn main() {
    let p =  Point{x: 1, y: 2.5};
    let p2 = Point{x:"hello", y:"world"};
    let p3 = p.mixup(p2);
    println!("p3.x = {},p3.y={}", p3.x, p3.y);
    
}
```

debug

```sh
#[derive(Debug)]
struct Point<T>{}
fn main() {
    let p = Point{};
    println!("{:?}",p);
}
```

default

```sh
#[derive(Debug, Default)]
struct User {
    username: String,
    email: String,
    age: i32,
}
fn main() {
  let user = User {
        username: "username4".to_string(),
        ..User::default()
    };
    println!("{:?}", user);
}
```