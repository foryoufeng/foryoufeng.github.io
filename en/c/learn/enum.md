# enum

basic


```sh
#include <stdio.h>

typedef enum Week {
    sun=1,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat
} Week;

int main(){
    Week week;
    for (week = sun; week <= sat; week++) {
        printf("%d\n", week);
    }

    return 0;
}
```