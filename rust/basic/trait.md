# trait

basic

```sh
use std::fmt::Display;

trait Animal{
    fn sound(&self);
    type Weight;
    fn set_weight(&mut self, weight: Self::Weight);
    fn get_weight(&self) -> Self::Weight;
}

struct Dog{
    weight: f32,
}
impl Animal for Dog{
    fn sound(&self){
        println!("wang wang : {}",self.weight);
    }

    type Weight = f32;

    fn set_weight(&mut self, weight: Self::Weight) {
        self.weight = weight;
    }

    fn get_weight(&self) -> Self::Weight {
        self.weight
    }
}

struct Cat{
    weight: i32,
}
impl Animal for Cat{
    fn sound(&self){
        println!("miao miao: {}",self.weight);
    }

    type Weight = i32;

    fn set_weight(&mut self, weight: Self::Weight) {
        self.weight = weight;
    }

    fn get_weight(&self) -> Self::Weight {
        self.weight
    }
}
fn make_sound<T>(animal: &dyn Animal<Weight = T>){
    animal.sound();
}

impl Display for Dog{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        if let Some(w) = f.width(){
            writeln!(f, "{:#^w$}", "Dog weight")?;
            writeln!(f,"{:<w$}:{:>w$}","weight",self.weight)?;
        }else {
            writeln!(f, "{:#^20} ", "Dog weight")?;
            writeln!(f,"{:<8}:{:>8}","weight",self.weight)?;
        }
        Ok(())
    }
}
fn main() {
    make_sound(&Dog{weight: 10.1});
    make_sound(&Cat{weight: 5});
    println!("{}",&Dog{weight: 10.1});
    println!("{:20}",&Dog{weight: 10.1});
}

```

restricting type parameters


```sh
impl <T: std::ops::Mul<Output = T> + Copy> Rectangle<T>{
    fn area(&self) -> T{
        self.width * self.height
    }
}

struct Rectangle<T>{
    width: T,
    height: T,
}

fn main() {
    let a = Rectangle{
        width: 10,
        height: 20,
    };
    println!("{}", a.area());
}

```

trait definition

```sh
impl <T> Rectangle<T>
where T: std::ops::Mul<Output = T> + Copy
{
    fn area(&self) -> T{
        self.width * self.height
    }
}
```

dyn feature


```sh


struct Rectangle<T>{
    width: T,
    height: T,
}

struct Circle{
    radius: f64,
}

trait Shape{
    type Output;
    fn area(&self) -> Self::Output;
}

impl Shape for Rectangle<f64>{
    type Output = f64;
    fn area(&self) -> f64{
        self.width * self.height
    }
}
impl Shape for Circle{
    type Output = f64;
    fn area(&self) -> f64{
        std::f64::consts::PI * self.radius * self.radius
    }
}

fn main() {
    let rec = Rectangle{
        width: 10.1,
        height: 20.2,
    };
    let circle = Circle{
        radius: 10.1,
    };
#    let v: Vec<&dyn Shape<Output=f64>> = vec![&rec, &circle];
    let v:Vec<Box<dyn Shape<Output=f64>>> = vec![Box::new(rec), Box::new(circle)];
    for shape in v{
        println!("{}", shape.area());
    }
}

```