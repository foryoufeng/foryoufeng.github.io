# Thread

basic use

```sh
use std::thread;
use std::time::Duration;
use demo::grep;

fn main() {
   let handle = thread::spawn(||{
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });
    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }
    handle.join().unwrap();
}


```

move

```sh
 let v = vec![1, 2, 3, 4, 5];
let handle = thread::spawn(move||{
    println!("hello {:?}",v);
});

handle.join().unwrap();
```