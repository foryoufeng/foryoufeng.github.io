# Option

basic use

```sh
fn main() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let index = find(&arr, 3);
    // if let Some(i) = index {
    //     println!("Found at index {}", i);
    //     println!("Found at value {}", arr[i as usize]);
    // } else {
    //     println!("Not found");
    // }
    match index {
        Some(i) => {
            println!("Found at index {}", i);
            println!("Found at value {}", arr[i as usize]);
        }
        None => {
            println!("Not found");
        }
    }
}

fn find(arr: &[i32], target: i32) -> Option<i32> {
    for (index, i) in arr.iter().enumerate() {
        if *i == target {
            return Some(index as i32);
        }
    }
    None
}

```