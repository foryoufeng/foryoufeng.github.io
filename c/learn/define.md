# define

basic

```sh
#define ABC 123
```

define func

```sh
#include <stdio.h>
#define ABC printf
#define FUNC(a,b) a*b
int main(){
    const int a = FUNC(10,2);
    ABC("%d\n", a);
    return 0;
}
```

define func2

```sh
#include <stdio.h>
#define ABC printf
#define FUNC(a,b) ((a) = (a)*(b));(a++)
int main(){
    int a = 10;
    FUNC(a,10);
    ABC("%d\n", a);
    return 0;
}
```

define func3

```sh
#include <stdio.h>
#define ABC printf
#define FUNC(a,b) do{((a) = (a)*(b));(a++);}while(0)

int main(){
    int a = 10;
    if (0)
        FUNC(a,10);
    else
        FUNC(a,11);
    ABC("%d\n", a);
    return 0;
}

```

string #

```sh
#include <stdio.h>
#define LOG(x) printf("%s is %d\n", #x,x);

int main(){
    const int a = 10;
    LOG(a);
    return 0;
}

```

vars

```sh
#include <stdio.h>
#define LOG(x) printf("%s:%s:%d-%s is %d\n",__FILE__, __FUNCTION__,__LINE__,#x,x);

int main(){
    const int a = 10;
    LOG(a);
    return 0;
}
```

more vars

```sh
#include <stdio.h>
#define LOG(x,...) printf("%s:%s:%d--"x"",__FILE__, __FUNCTION__,__LINE__,##__VA_ARGS__);

int main(){
    const int a = 10;
    LOG("a=%d\n",a);
    return 0;
}

```