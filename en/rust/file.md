# file

read file

```sh
use std::fs;

fn main() {
    let content: String = fs::read_to_string("1.txt").expect("Something went wrong reading the file");
    let lines: Vec<&str> = content.split("\n").collect();
    for line in lines {
        println!("{}", line);
    }
    println!("Hello, world!");
}

```

match deal

```sh
fn main() {
    let file_name = "12.txt";
    let content:Result<String,Error> = fs::read_to_string(file_name);
    match content { 
        Ok(content) => {
            let lines: Vec<&str> = content.split("\n").collect();
            for line in lines {
                println!("{}", line);
            }
        },
        Err(err) => {
            println!("read file:{}, error:{}",file_name, err);
        }
    }
}
```

use anyhow

```sh
use std::fs;
use anyhow::Result;

fn main() -> Result<()> {
    let file_name = "1.txt";
    let content = read_file(file_name)?;
    let lines: Vec<&str> = content.split("\n").collect();
    for line in lines.iter() {
        println!("{}", line);
    }
    Ok(())
}

fn read_file(file_name:&str)-> Result<String> {
    let content = fs::read_to_string(file_name)?;
    Ok(content)
}
```