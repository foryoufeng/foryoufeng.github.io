# box

raw pointer

```sh

fn main() {
     let mut x = 10;
     let  raw_ptr = &mut x as *mut i32;
     unsafe {
          println!("{}", *raw_ptr);
          *raw_ptr = 20;
          println!("{}", *raw_ptr);
     }
}

```

basic

```sh

fn main() {
     let mut p = Box::new(5);
     println!("{:p}", p);
     *p = 10;
     println!("{:p}", p);
     println!("{}", p);
}

```

node

```sh

#[derive(Debug)]
struct Node{
     data: i32,
     next: Option<Box<Node>>
}

fn main() {
     let node = Node{
          data: 1,
          next: None
     };
     let node2 = Node{
          data: 1,
          next: Some(Box::new(node))
     };
     println!("{}", node2.data);
     println!("{:?}", node2.next);
}

```

