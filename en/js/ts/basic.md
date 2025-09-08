# basic type

Boolean

```sh
let isDone: boolean = false;
```

Number

```sh
let a: number = 6;
```

String

```sh
let a:string ="bob";
```


Array

```sh
let list: number[] = [1,2,3];
let list: Array<number> = [1, 2, 3];
```

enum

```sh
enum Color{
    Red = "red",
    Green = "green",
    Blue = "blue",
}
let c = Color.Red
console.log(c)
```

any

```sh
let a:any
let b:string
b = a
```

unknown

```sh
let a:unknown
a = 'hello';
b = (a as string).toUpperCase()
console.log(b)
```

void

```sh
function log(message:string):void{
  console.log(message)
}
```

never

```sh
function s2():never{
    throw TypeError;
}
```

object

```sh
let person:{
    name: string,
    email: string,
    age?: number,
    [key:string]:any
}
person = {name:'jim',email:'aa@qq.com',age:"a",address:'beijing'}
console.log(person.name)
```

tuple  

```sh
let num:[string, number]
num = ["hello",1]
console.log(num)
```

enum

```sh
enum Person{
  MAN='man',
  WOMAN='woman'
}
```

type

```sh
type Status = number | string
let a:Status = 12
console.log(a)
```

interface

```sh
interface Options {
    name: string;
    age: number;
    speak(n:number): void;
}

const client:Options = {
    name:"jim",
    age:12,
    speak(n:number) {
        console.log(n)
    }
};
client.speak(12)
```

T

```sh
function add<T,U>(n:T,m:U):T|U{
    return Date.now()%2?n:m;
}
let n = add<number,boolean>(12,false);
console.log(n)
```

support js

`demo.d.ts`

```sh
declare function add(a: number, b: number): number;
declare function mul(a: number, b: number): number;

export { add, mul };
```

`demo.js`

```sh
export function add(a,b){
    return a + b;
}
export function mul(a,b) {
    return a * b;
}
```

`index.ts`

```sh
import {add,mul} from './demo.js'

console.log(add(1,2))
console.log(mul(3,2))
```

as

```sh
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

```