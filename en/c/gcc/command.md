# gcc

install

```sh
sudo apt install build-essential
```

use

```sh
gcc main.c -o main
```

```sh
gcc -S main.c -o main.s
```

compile

```sh
gcc -o main.i main.c -E
```

to .o file

```sh
gcc -o main.o main.s
```

add define

```sh
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
#ifdef DEBUG
    printf("hello");
#endif
    int c = add(1, 2);
    printf("%d\n", c);
    return 0;
}
```

run
```sh
gcc -o main main.c -D DEBUG
```