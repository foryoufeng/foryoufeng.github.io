# basic

print

```sh
use std::io::Write;

fn main() {
    print!("Hello, world! ");
    std::io::stdout().flush().unwrap();
    eprintln!("error");
    let name = "jim";
    let age = 40;
    let str = "{}";
    let message = format!(
        "my name is :{},age is {},this is a long \
        text and I need show it {}",
        name, age, str
    );
    println!("{}", message);
}
```

str show

```sh
fn main() {
    let str = r"hello {} \world";
    println!("{}", str);
    println!("{}", r#"hello \world"#);
    let message = r##" \ "hello world" \ {} "##;
    println!("{}", message);
}
```

basic data type

```sh
i8 i16 i32 i64 isize
u8 u16 u32 u64 usize
f32 f64
```

data size

```sh
fn main() {
    println!("u8:  {} bytes", size_of::<u8>());   // 1
    println!("u16: {} bytes", size_of::<u16>());  // 2
    println!("u32: {} bytes", size_of::<u32>());  // 4
    println!("u64: {} bytes", size_of::<u64>());  // 8
    println!("u128: {} bytes", size_of::<u128>()); // 16

    println!("i8:  {} bytes", size_of::<i8>());   // 1
    println!("char:  {} bytes", size_of::<char>());   // 4
    println!("bool:  {} bytes", size_of::<bool>());   // 1
    println!("isize: {} bytes", size_of::<isize>()); // depends on architecture (4 or 8)
}
```

array

```sh
fn main() {
    let arr = [1, 2, 3, 4, 5];
    println!("{:?}", arr);
    for item in arr.iter() {
        println!("{}", item);
    }
    for (index, value) in arr.iter().enumerate() {
        println!("arr[{}] = {}", index, *value);
    }
    let arr2: [i32; 10] = [1;10];
    println!("{:?}", arr2);
}

```