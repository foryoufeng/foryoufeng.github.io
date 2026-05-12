# compile

see compile

```sh
 gcc -o main main.c -v
```

before compile

```sh
 gcc -o main.i main.c -E
```

compile to assembly

```sh
gcc -o main.s main.c -S
```

use assembly to compile

```sh
 gcc -o main.o main.s -c
```

compile to binary

```sh
gcc -o main main.o
```

include header file

```sh
gcc -o main main.c -I ./inc
```
