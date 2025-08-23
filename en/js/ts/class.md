# class

decorator

```sh
function CustomString(target:Function){
    target.prototype.toString = function() {
        return JSON.stringify(this);
    }
    // not allow to add attr
    Object.seal(target.prototype)
}

@CustomString
class Person {
    constructor(public name: string, public age: number) {}
}
let p = new Person("jim",12)
console.log(p.toString());
```