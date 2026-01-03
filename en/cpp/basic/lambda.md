# lambda

basic

```sh
int main(){
  auto hello = [](){
    qDebug()<<"hello world";
  }
  hello();
}
```

add params

```sh
int main(){
    auto hello = [](int a,int b)->int{
        return a+b;
    };
    int a = hello(11,2);
    qDebug()<<a;
}
```

get out var

```sh
int main(){
  int x = 10;
  auto func = [x](){
    qDebug()<<x;
  }
  x = 20;
  func();
}
```

get out var with &

```sh
int main(){
  int x = 10;
  auto func = [&x](){
    qDebug()<<x;
  }
  x = 20;
  func();
}
```

mutable

```sh
int main(){
  int x = 10;
  auto func = [x]()mutable{
    x++;
    qDebug()<<x;
  }
  func();
}
```

get all var

```sh
int a = 1, b = 2;
auto func1 = [=]() {
    std::cout << a + b << std::endl;
};
```