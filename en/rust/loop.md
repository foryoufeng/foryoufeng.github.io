# loog

basic use

```sh
let mut counter = 0;
let result = loop {
    counter += 1;
    if counter == 10 {
        break counter * 2;
    }
};
println!("The result is {}", result);
```

use while

```sh
let mut number  =3;
while number != 0 {
    println!("{}",number);
    number -=1;
}
println!("end");
```

for

```sh
let a = [10,20,30,40,50];
for element in a.iter(){
    println!("the element is :{}",element);
}
```
