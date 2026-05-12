# function

define

```sh
void main(){
  print(add(1,2));
}
int add(int a,int b){
  return a+b;
}
```

Optional param

```sh
void main(){
  print(sum(1,3));
  print(sum(1,3,2));
}

int sum(int a ,[int?b,int?c]){
  return a+(b??0)+(c??0);
}
```


```sh
void main(){
  showPerson("jim");
}
void showPerson(String name,{int? age=10,String? sex="male"}){
  print("name:$name,age:$age,sex:$sex");
}
```

Anonymous function

```sh
void main(){
  onTest(test);
}
Function test = (){
  print("test");
};

void onTest(Function callback){
   callback();
}
```

Arrow function

```sh
void main(){
 print(add(1, 2));
}
int add(int a,int b) => a+b;
```