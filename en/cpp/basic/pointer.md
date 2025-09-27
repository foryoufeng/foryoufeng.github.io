# pointer

basic

```sh
#include <iostream>

using namespace std;
int main() {
    int a = 10;
    int *p = nullptr;
    p=&a;
    cout << "p:"<<p<<"==="<< *p << endl;
    cout << sizeof(p) << endl;
    return 0;
}

```

const pointer

```sh
#include <iostream>

using namespace std;
int main() {
    int a = 10;
    int b = 20;
    const int *p = nullptr;
    p=&a;
    cout << "p:"<<p<<"==="<< *p << endl;
    p=&b;
    cout << "p:"<<p<<"==="<< *p << endl;
    cout << sizeof(p) << endl;
    return 0;
}

```

pointer const

```sh
#include <iostream>

using namespace std;
int main() {
    int a = 10;
    int * const p = &a;
    *p = 20;
    cout << "p:"<<p<<"==="<< *p << endl;
    return 0;
}

```

delete 

```sh
int * func(){
    return new int(10);
}
int main() {
    int *p = func();
    cout << *p << endl;
    delete p;
}
```

&  => * const

```sh
//int * const a
void swap(int &a,int &b){
    int temp =a;
    a = b;
    b = temp;
}
int main() {
    int a = 10;
    int b = 20;
    swap(a,b);
    cout << a << endl;
    cout << b << endl;
}
```