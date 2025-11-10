# typedef

basic

```sh
#include <stdio.h>

typedef int integer;
typedef struct Book {
    int id;
    char *title;
    char *author;
} Book;
int main(){

    integer a, b;
    scanf("%d %d", &a, &b);
    printf("%d\n", a + b);
    Book book={
        1,"hello","jim"
    };
    printf("%s\n", book.title);
    return 0;
}
```

