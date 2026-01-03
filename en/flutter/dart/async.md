# async

basic

```sh
void main(){

  Future f = Future((){
    return "hello future";
  });
  f.then((value){
    print(value);
  });
}
```

async

```sh
void main(){
  get();
}

void get() async{
    await Future.delayed(Duration(seconds: 1));
    print("success");
}

```