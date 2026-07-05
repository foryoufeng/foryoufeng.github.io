# thread

basic

```sh
use std::thread;
use std::thread::JoinHandle;

fn main() {
     let h1:JoinHandle<()> = thread::spawn(|| {
          for i in 1..10 {
               println!("h1 from thread {}", i);
               thread::sleep(std::time::Duration::from_millis(10));
          }
     });
     h1.join().unwrap();
}

```

var

```sh
use std::thread;
use std::thread::JoinHandle;
use std::time::Duration;
fn main() {
     let msg = "hello world";
     let h1:JoinHandle<()> = thread::spawn(move || {
          for i in 1..10 {
               println!("h1 from thread {},{}",msg, i);
               thread::sleep(Duration::from_millis(10));
          }
     });
     h1.join().unwrap();
}

```

scope

```sh
use std::thread;
use std::time::Duration;
fn main() {
     let msg = "hello world";
     thread::scope(|s| {
          s.spawn(|| {
               for i in 1..10 {
                    println!("h1 from thread {},{}",msg, i);
                    thread::sleep(Duration::from_millis(10));
               }
          });
     });
     println!("main {}",msg)
}

```

channel

```sh
use std::sync::mpsc::{Receiver, Sender};
use std::sync::mpsc;
use std::thread;
use std::time::Duration;
fn main() {
     let (tx, rx):(Sender<String>,Receiver< String>) = mpsc::channel();
     thread::spawn(move || {
          thread::sleep(Duration::from_secs(2));
          tx.send("hello".to_string()).unwrap();
     });

     let res = rx.recv();
     println!("res:{:#?}",res);
}

```

loop

```sh
use std::sync::mpsc::{Receiver, Sender,TryRecvError};
use std::sync::mpsc;
use std::thread;
use std::time::Duration;
fn main() {
     let (tx, rx):(Sender<String>,Receiver< String>) = mpsc::channel();
     thread::spawn(move || {
          thread::sleep(Duration::from_secs(2));
          tx.send("hello".to_string()).unwrap();
     });
     loop {
          match rx.try_recv() {
               Ok(res) => {
                    println!("res:{:#?}",res);
               },
               Err(TryRecvError::Empty) => {
                    println!("no message");
               },
               Err(TryRecvError::Disconnected) => {
                    println!("disconnected");
                    break;
               }
          }
          thread::sleep(Duration::from_millis(100));
     }
}

```

send more message

```sh
use std::sync::mpsc::{Receiver, Sender};
use std::sync::mpsc;
use std::thread;
use std::time::Duration;
fn main() {
     let (tx, rx):(Sender<String>,Receiver< String>) = mpsc::channel();
     thread::spawn(move || {
          thread::sleep(Duration::from_secs(1));
          tx.send("hello 1".to_string()).unwrap();
          tx.send("hello 2".to_string()).unwrap();
          tx.send("hello 3".to_string()).unwrap();
          tx.send("hello 4".to_string()).unwrap();
     });
     loop {
          match rx.recv() {
               Ok(res) => {
                    println!("res:{:#?}",res);
               },
               Err(err) => {
                    println!("err: {:#?}",err);
                    break;
               }
          }
          thread::sleep(Duration::from_millis(100));
     }
}

```

drop  channel

```sh
use std::sync::mpsc::{Receiver, Sender};
use std::sync::mpsc;
use std::thread;
use std::time::Duration;
fn main() {
     let (tx, rx):(Sender<String>,Receiver< String>) = mpsc::channel();

     for i in 0..3 {
          let tx_clone = tx.clone();
          thread::spawn(move || {
               tx_clone.send("hello ".to_string()).unwrap();
          });
     }
     drop(tx);
     loop {
          match rx.recv() {
               Ok(res) => {
                    println!("res:{:#?}",res);
               },
               Err(err) => {
                    println!("err: {:#?}",err);
                    break;
               }
          }
          thread::sleep(Duration::from_millis(100));
     }
}

```

mutex

```sh
use std::sync::{Mutex, MutexGuard};
use std::thread;
fn main() {
     let m  =Mutex::new(0);
     thread::scope(|s| {
          s.spawn(|| {
               let mut num:MutexGuard<'_, i32> = m.lock().unwrap();
               *num += 1;
          });
          s.spawn(|| {
               let mut num:MutexGuard<'_, i32> = m.lock().unwrap();
               *num += 1;
          });
     });

     println!("mutex {:?}",m);
}

```

arc

```sh
use std::sync::{Arc, Mutex, MutexGuard};
use std::thread;
fn main() {
     let m  =Mutex::new(0);
     let counter = Arc::new(m);
     let c1 = Arc::clone(&counter);
     let c2 = Arc::clone(&counter);
     let h1 = thread::spawn(move|| {
          let mut num:MutexGuard<'_, i32> = c1.lock().unwrap();
          *num += 1;
     });
     let h2 = thread::spawn(move|| {
          let mut num:MutexGuard<'_, i32> = c2.lock().unwrap();
          *num += 1;
     });
     h1.join().unwrap();
     h2.join().unwrap();

     println!("arc {:?}",counter);
}

```

