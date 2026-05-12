# qt lambda

basic

```sh
lambdaButton = new QPushButton("lambdaButton",this);
    connect(lambdaButton,&QPushButton::clicked,[this](){
       this->onExit();
});
```

mutable

```sh
int a =10;
lambdaButton = new QPushButton("lambdaButton",this);
    connect(lambdaButton,&QPushButton::clicked,[this,&a]() mutable{
       a = 20;
       this->onExit();
});
```
