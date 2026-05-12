# point

baisc

```sh
int main(){
  int a = 2;
  int* p = &a;
  *p+=1;
  printf("a=%d",*p);
}
```

str for

```sh
int main(){
    char *str = "hello world";
    int len = strlen(str);
    for (int i = 0; i < len; i++) {
        printf("%c", str[i]);
    }

    return 0;
}
```

func point

```sh
int sum(int a, int b) {
    return a + b;
}
int main(){
    int (*p)(int,int);
    int a = 10;
    int b = 20;
    p=sum;
    printf("%d\n", p(a,b));
    return 0;
}
```