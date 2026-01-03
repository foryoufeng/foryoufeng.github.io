# if

basic use

```sh
let number = 3;
if number < 5 {
    println!("condition was true");
}else { 
    println!("condition was false");
}
```

expression

```sh
let condition =  true;
let number = if condition { 5 } else { 6 };
println!("{}", number);
```

match

```sh
let num = 3;
let choose = match num {
    0 => "zero",
    1 => "one",
    2 => "two",
    3 => "three",
    _ => "four",
};
println!("{}",choose);
```