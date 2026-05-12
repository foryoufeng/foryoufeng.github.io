# Trait

basic use


```sh
pub trait Summarizable {
    fn summarize(&self) -> String;
}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}
impl Summarizable for Tweet{
    fn summarize(&self) ->String{
        format!("{} : {}",self.username,self.content)
    }
}
```

in main use

```sh
use demo::Tweet;
use demo::Summarizable;

fn main() {
    let tweet = Tweet{
        username:"Rust".to_string(),
        content:"Hello World!".to_string(),
        reply: false,
        retweet: false,
    };
    println!("{}",tweet.summarize());
}
```