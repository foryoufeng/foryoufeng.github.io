# search

`lib.rs`
```sh
use std::error::Error;
use std::fs;

pub fn run(config: Config) -> Result<(),Box<dyn Error>>{
    let contents = fs::read_to_string(config.file)?;
    let result = if config.case_sensitive{
        search_insensitive(&config.query, &contents)
    }else { 
        search(&config.query, &contents)
    };
    for line in result {
        println!("{}", line);  
    }
    Ok(())
}
pub struct Config {
    query:String,
    file:String,
    case_sensitive:bool,
}

impl Config {
    pub fn new(args:&[String],case_sensitive:bool) -> Result<Config, &'static str>{
        if args.len() < 3{
            return Err("not enough arguments");
        }
        let query = args[1].clone();
        let file = args[2].clone();
        Ok(Config{query, file,case_sensitive})
    }
}

pub fn search<'a>(query:&str,contents:&'a str) -> Vec<&'a str>{
    let mut result = Vec::new();
    for line in contents.lines(){
        if line.contains(query){
            result.push(line);
        }
    }
    result
}

pub fn search_insensitive<'a>(query:&str,contents:&'a str) -> Vec<&'a str>{
    let mut result = Vec::new();
    let query = query.to_lowercase();
    for line in contents.lines(){
        if line.to_lowercase().contains(&query){
            result.push(line);
        }
    }
    result
}
```

`main.rs`

```sh
use std::{env, process};
use demo::Config;

fn main() {
    let case_sensitive = env::var("CASE_SENSITIVE").is_ok();
   let args:Vec<String> = env::args().collect::<Vec<String>>();
    let config = Config::new(&args,case_sensitive).unwrap_or_else(|err| {
        eprintln!("Problem parsing arguments: {}", err);
        process::exit(1);
    });
    if let Err(e) = demo::run(config){
        eprintln!("Application error:{}",e);
        process::exit(1);
    }
}
```

`lib_test.rs`

```sh
use demo::{search, search_insensitive};

mod common;
#[test]
fn it_search_case_sensitivity() {
    let query = "duct";
    let contents = "\
local 
test
production
Duct tape";
    assert_eq!(vec!["production"], search(query, contents));
}

#[test]
fn it_search_insensitive() {
    let query = "duct";
    let contents = "\
local 
test
production
Duct tape";
    assert_eq!(vec!["production","Duct tape"], search_insensitive(query, contents));
}
```