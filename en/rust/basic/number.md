# number

# Number Types in Rust

Rust provides several primitive numeric types that are categorized into two main groups: integers and floating-point numbers.

## Integer Types

Integers are numbers without a fractional component. Rust has both signed and unsigned integer types.

### Signed Integers

Signed integers can represent both positive and negative numbers.

| Type  | Size     | Range                                              |
|-------|----------|----------------------------------------------------|
| i8    | 1 byte   | -128 to 127                                        |
| i16   | 2 bytes  | -32,768 to 32,767                                  |
| i32   | 4 bytes  | -2,147,483,648 to 2,147,483,647                    |
| i64   | 8 bytes  | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| i128  | 16 bytes | -2^127 to 2^127 - 1                                |
| isize | Platform-dependent | Depends on architecture (4 or 8 bytes)     |

### Unsigned Integers

Unsigned integers can only represent non-negative numbers.

| Type  | Size     | Range                                    |
|-------|----------|------------------------------------------|
| u8    | 1 byte   | 0 to 255                                 |
| u16   | 2 bytes  | 0 to 65,535                              |
| u32   | 4 bytes  | 0 to 4,294,967,295                       |
| u64   | 8 bytes  | 0 to 18,446,744,073,709,551,615          |
| u128  | 16 bytes | 0 to 2^128 - 1                           |
| usize | Platform-dependent | Depends on architecture (4 or 8 bytes) |

## Floating-Point Types

Floating-point numbers are numbers with a fractional component.

| Type | Size    | Precision                        |
|------|---------|----------------------------------|
| f32  | 4 bytes | Single precision (~6 decimal digits) |
| f64  | 8 bytes | Double precision (~15 decimal digits) |

> **Note:** `isize` and `usize` depend on the architecture of your computer. On a 64-bit system, they are 8 bytes; on a 32-bit system, they are 4 bytes.

## Examples


```sh
fn main() {
    let a:u32 = 5;
    let b:u32 = 10;
    let c:u8 = (b + a) as u8;
    println!("{}", c);
}

```



