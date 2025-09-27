# basic

var
```sh
string name;
```

print

```sh
using namespace std;
int main(){
    cout<<"hello world"<< endl;
}
```
int

```sh
#include "iostream"

using namespace std;
int main(){
    int b = 12;
    cout<<"int "<< sizeof(b)<<endl;

}
```

float

```sh
float f = 3.1415926;
cout<<"f="<<f<<"--float"<< sizeof(f)<<endl;
```

string

```sh
char str[] = "hello world";
cout << str << endl;
string str2 = "hello string";
cout << str2<< endl;
```

bool

```sh
bool a = true;
cout << "a="<<a<< endl;
```

switch

```sh
int sum = 3;
switch (sum) {
    case 1:
        cout << "=1" << endl;
        break;
    case 2:
        cout << "=2" << endl;
        break;
    case 3:
        cout << "=3" << endl;
        break;
    default:
        cout << "default" << endl;
}
```

while

```sh
int main(){
    int count=1;
    while (count<10){
        cout << count << endl;
        count++;
    }

}
```

for

```sh
int main(){

    for (int i = 0; i < 10; ++i) {
        cout << i << endl;
    }
}
```

random

```sh
#include "iostream"
#include <random>

using namespace std;
int main(){
    random_device rd;
    mt19937 gen(rd());
    std::uniform_int_distribution<int> dist(0,1000);
    for (int i = 0; i < 50; ++i) {
        int r = dist(gen);
        cout <<i<<"==>"<< r << endl;
    }
}


```

auth

```sh
int sum(int a,int b){
    return a+b;
}
int main(){
    auto c = sum(1,2);
    cout << c << endl;
}
```
