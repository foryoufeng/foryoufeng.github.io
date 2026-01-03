# reference

basic

```sh
int swap(int &a,int &b) {
    int temp = a;
    a = b;
    b = temp;
}
int main() {
    int a =10;
    int b =20;
    swap(a,b);
    cout << "a="<<a << endl;
    cout << "b="<<b << endl;
}

```

function

```sh
int& show() {
    static  int a = 10;
    return a;
}
int main() {
    int&a = show();
    cout << "a="<<a << endl;
    show() = 20;
    cout << "a=" << a << endl;
}
```