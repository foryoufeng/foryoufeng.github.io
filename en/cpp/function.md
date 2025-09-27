# function

basic

```sh
int add(int a,int b){
    return a+b;
}
```

function overload

```sh
#include "iostream"

using namespace std;
int sum(int a,int b){
    return a+b;
}
double sum(double a,double b){
    return a+b;
}
int main(){
    int c = sum(1,2);
    double d = sum(1.2,1.3);
    cout << c << endl;
    cout << d << endl;
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

