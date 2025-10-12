# function

define

```sh
int add(int a,int b){
  return a + b;
}
```

overload

```sh
int add(int a,int b){
    return a +b;
}
double add(double a,double b){
    return a +b;
}
```

function pointer

```sh
int add(int a,int b){
    return a+b;
}
int main(){
  int(*funAdd)(int,int)= add;
  int c = funAdd(1,2);
}
```