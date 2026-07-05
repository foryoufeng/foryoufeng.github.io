# tuple

basic

```sh
fn main() {
    let item = (1, 2,"hello",true);
    println!("{:?}", item);
    println!("{}", item.0);
    println!("{}", item.2);
    let (id, age, name, is_male) = item;
    println!("{} {} {} {}", id, age, name, is_male);
}
```

tuple function

```sh
fn main() {
    let mut numbers = (1, 2,3);
    add(&mut numbers);
    println!("{:?}", numbers);
}

fn add(numbers: &mut (i32, i32, i32)) ->  (){
    let (mut a,mut b,mut c) = *numbers;
    a+=1;
    b+=1;
    c+=1;
    *numbers = (a,b,c);
}
```