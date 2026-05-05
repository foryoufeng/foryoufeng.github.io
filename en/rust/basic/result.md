# result

basic

```sh
fn add(str: &str, s2: &str) -> Result<String, String> {
    if str.is_empty() || s2.is_empty() {
        return Err("str is empty".to_string());
    }
    Ok(str.to_string() + s2)
}
fn main() {
    let res = add("hello ", "world");
    match res {
        Ok(s) => {
            println!("str = {}", s);
        }
        Err(e) => {
            println!("err: {}", e);
        }
    }
}

```

enum


```sh
enum AddError {
    Empty,
    LengthMismatch,
}

impl AddError {
    fn message(&self) -> &'static str {
        match self {
            AddError::Empty => "str is empty",
            AddError::LengthMismatch => "str length mismatch",
        }
    }
}
fn add(str: &str, s2: &str) -> Result<String, AddError> {
    if str.is_empty() || s2.is_empty() {
        return Err(AddError::Empty);
    }
    if str.len() != s2.len() {
        return Err(AddError::LengthMismatch);
    }
    Ok(str.to_string() + s2)
}
fn main() {
    let res = add("hello ", "world");
    match res {
        Ok(s) => {
            println!("str = {}", s);
        }
        Err(e) => {
            println!("err: {}", e.message());
        }
    }
}

```

use ?

```sh
#[derive(Debug)]
enum AddError {
    Empty,
    LengthMismatch,
}

impl AddError {
    fn message(&self) -> &'static str {
        match self {
            AddError::Empty => "str is empty",
            AddError::LengthMismatch => "str length mismatch",
        }
    }
}
fn add(str: &str, s2: &str) -> Result<String, AddError> {
    if str.is_empty() || s2.is_empty() {
        return Err(AddError::Empty);
    }
    if str.len() != s2.len() {
        return Err(AddError::LengthMismatch);
    }
    Ok(str.to_string() + s2)
}
fn main() -> Result<(), AddError> {
    let res = add("hello ", "world ")?;
    println!("{}", res);
    Ok(())
}

```

Option

```sh
fn add(str: &str, s2: &str) -> Option<String> {
    if str.is_empty() || s2.is_empty() {
        return None;
    }
    Some(str.to_string() + s2)
}
fn main() -> Result<(), String> {
    let res = add("hello ", "world ").ok_or("error")?;
    println!("{}", res);
    Ok(())
}

```

unwrap

```sh
fn add(str: &str, s2: &str) -> Option<String> {
    if str.is_empty() || s2.is_empty() {
        return None;
    }
    Some(str.to_string() + s2)
}
fn main() -> Result<(), String> {
    let res = add("hello ", "").unwrap();
    println!("{}", res);
    Ok(())
}

```

