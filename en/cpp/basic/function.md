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

function template

```sh
template <typename T>
T sum(T a,T b){
    return a + b;
}
int main(){
    int c = sum<int>(1,2);
    double d = sum<double>(1.2,2.5);
    cout << c << endl;
    cout << d << endl;
}
```