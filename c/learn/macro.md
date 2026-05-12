# macro

define

```bash
#include <stdio.h>
#define PI 3.14
#define V  (PI*PI*2.15)
#define MAX(a,b) (((a)>(b))?(a):(b))
int main(){
    printf("Hello World! %.2f,v=%.2f\n",PI,V);
    int x=10;
    int y=20;
    printf("max=%d\n",MAX(x,y));
    return 0;
}

```

print

```sh
#include <stdio.h>

#define SHOW_LIST(...) printf(# __VA_ARGS__)
int main(){
    SHOW_LIST(hello world,123,5.12);
    return 0;
}

```