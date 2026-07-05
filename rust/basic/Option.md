# Option

basic

```sh
fn main() {
    let arr = ["Apple","Banana","Origen"];
    let max = find_big(&arr);
    println!("max = {}",max.unwrap());
}

fn find_big<'a>(strings:&'a[&'a str])->Option<&'a str>{
    let mut max: Option<&str> = None;
    for item in strings {
        if max.is_none() || item.len() > max.unwrap().len(){
            max = Some(item);
        }
    }
    max
}
```