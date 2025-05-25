# slice

basic use

```sh
fn main() {
    let mut s = String::from("hello world");
    let word = fist_word(&s);
    println!("The word is: {}", word);
}

fn fist_word(s:&str) -> &str {
    let bytes = s.as_bytes();
    for(i,&item) in bytes.iter().enumerate(){
        if item ==b' '{
            return &s[..i];
        }
    }
    &s[..]
}
```

use str slice

```sh
let s = String::from("hello world");
let hello = &s[..5];
let world = &s[6..];
println!("{}", hello);
println!("{}", world);
```


```sh

```