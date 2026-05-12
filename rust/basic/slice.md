# slice


```sh
fn main() {
        let arr = [1,2,4,5];
        let s1=&arr[1..=3];
        println!("{:?}", arr);
        println!("{:?}", s1);
}
```