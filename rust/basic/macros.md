# macros

basic

```sh

macro_rules! hello {
    () => {
         println!("Hello, world!");
    };
     ($name:expr) => {
         println!("Hello, {}!", $name);
     };
      ($($name:expr),+) => {
         $(
         println!("this is, {}!", $name);
         )+;
     };
}
fn main() {
     hello!("macro");
     hello!("macro","test","world");
     hello!();
}

```