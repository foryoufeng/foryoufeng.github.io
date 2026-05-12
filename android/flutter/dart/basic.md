# basic

bool

```sh
void main(){
  bool flag = false;
  if(flag){
    print("flag is true");
  }else{
    print("flag is false");
  }
}
```

List

```sh
void main(){
  List students = ["zhangsan","lishi","wangwu"];
  print(students);
  for(var student in students){
    print(student);
  }
}
```

Map

```sh
void main(){
  Map user = {
    "name":"jim",
    "age":23
  };
  print(user['name']);
  user.forEach((key,value){
    print("key=$key");
    print("value=$value");
  });
}
```

assert

```sh
void main(){
  String? username = null;
  print(username?.startsWith("h"));
  print(username!.startsWith("h"));
}
```

switch

```sh
void main(){
  int a = 1;
  switch(a){
    case 1:
      print(1);
      break;
    case 2:
      print(2);
      break;
    default:
      print(5);
  }
}
```

while

```sh
void main(){
  int a = 10;
 while(a>0){
   print(a);
   a--;
 }
}
```

for

```sh
void main(){
  int a = 10;
  for(int i=0;i<a;i++){
    print(i);
  }
}
```