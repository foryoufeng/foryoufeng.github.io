# c language basic

variable

```sh
int a = 10;
float b = 96.12;

```

function
```sh
int sum(int a, int b){
     return a + b ;
}
```

printf 
```sh
%d   int
%f   float
%c   char
%p   point
%s   string
```

define
```sh
#define NAME "jim"
```

unsigned int 

```sh
#include <stdio.h>
#include "math.h"

#define A "hello"
int main(){
    unsigned int a= pow(2,32) -1;
    printf("a = %u\n",a);
}
```

print

```sh
void printNums(int *nums,int len) {
    for (int i = 0; i < len; i++) {
        printf("%d\n", nums[i]);
    }
}

int main() {
    int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int len = sizeof(a)/sizeof(int);
    printNums(a,len);
    return 0;
}
```