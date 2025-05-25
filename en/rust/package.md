# package

define package `lib.rs`

```sh
mod front_of_house {
    pub mod hosting {
        pub fn add_to_wait_list() {}
    }
    
    mod serving {
        fn take_order() {}
        fn serve_order() {}
    }
}
use crate::front_of_house::hosting;
pub fn eat_at_restaurant() {
    hosting::add_to_wait_list();
}
```