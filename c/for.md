# for 

while

```sh
int count = 0;
while (true){
    count++;
    if(count>10){
        printf("over\n");
        break;
    } else{
        printf("count = %d\n",count);
    }
}
int count2 = 0;
do{
    count2++;
    if(count2>10){
        printf("over\n");
        break;
    } else{
        printf("count2 = %d\n",count2);
    }
} while (true);
```