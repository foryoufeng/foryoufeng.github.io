# interface

basic

```sh
interface SquareConfig{
    color?: string;
    width?: number;
}
function createSquare(squareConfig: SquareConfig){
    let square = {color:"red",width:100}
    if(squareConfig.color){
        square.color = squareConfig.color
    }
    if(squareConfig.width){
        square.width = squareConfig.width
    }
    return square;
}
let square = createSquare({"color":"blue"});
console.log(square)
```

readonly

```sh
interface Point{
    readonly x: number;
    readonly y: number;
}
let point: Point = {x:12,y:20};
console.log(point)
```

optional param

```sh
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```
