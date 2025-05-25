# Test


```sh

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn it_add(){
        assert_eq!(4,add(2));
    }
    #[test]
    #[should_panic(expected = "a is less than 1")]
    fn it_add_less_than_1(){
        add(0);
    }
    #[test]
    #[should_panic(expected = "a is greater than 100")]
    fn it_add_more_than_100(){
        add(101);
    }
    #[test]
    fn it_works() -> Result<(), String> {
        if 2 + 2 == 4 {
            Ok(())
        }else { 
            Err(String::from("two plus two does not equal four"))
        }
    }
}
```

in rust test directory make common


```sh
touc common/mod.rs
```

define fun 

```sh
pub fn setup() {
    println!("Test setup");
}
```