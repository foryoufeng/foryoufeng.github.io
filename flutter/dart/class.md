# class

basic

```sh
void main(){
  Person p = Person();
  p.name="jim";
  p.study();
}
class Person{
  String name="";
  int age=0;
  String sex="male";
  String _a="";

  void study(){
    print("$name study");
  }
  void setA(String a){
    this._a = a;
  }
  String getA(){
    return this._a;
  }

}
```

construct class

```sh
void main(){
  Person p = Person(name:"jim");
  p.study();
}
class Person{
  String? name="";
  int? age=0;
  String? sex="male";

  Person({this.name="",this.age=0,this.sex=""});
  void study(){
    print("$name study");
  }
}
```

extend

```sh
void main(){
  Parent parent = Child(name:"jim");
  parent.study();
}

class Parent{
  String? name="";
  int? age=0;

  Parent({this.name="",this.age=0});
  void study(){
    print("$name study");
  }
}
class Child extends Parent{

  Child({super.name,super.age});

  @override
  void study(){
    print("child print");
  }
}
```

mixin

```sh
void main(){
  Person student = Student(name: "tom");
  Person teacher = Teacher(name: "jim");
  student.song("tom");
  teacher.song("jim");
}
mixin Base{
  void song(String name){
    print("$name song");
  }
}
class Person with Base{
  String? name;
  int? age;
  Person({this.name,this.age});
}

class Student extends Person{
  Student({super.name,super.age});
}

class Teacher extends Person{
  Teacher({super.name,super.age});
}
```