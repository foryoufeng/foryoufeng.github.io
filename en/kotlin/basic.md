# basic

when

```sh
package tech.pplang

fun main() {
    println("input")
    val a = readln().toInt()
    when (a) {
        1 -> println("a")
        2 -> println("b")
        3 -> println("c")
        else -> println("d")
    }
}


```

for

```sh
package tech.pplang

fun main() {
    println("input")
    for (i in 1..10){
        println(i)
    }
}


```

while

```sh
package tech.pplang

fun main() {
    println("input")
    var i =0;
    while (i<10){
        println(i)
        i++
    }
}


```