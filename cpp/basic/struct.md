# struct

basic

```sh
#include <iostream>

using namespace std;

struct Student{
    string name;
    int age;
    int score;
};
void print(const string& str){
    cout << str << endl;
}
void print(int str){
    cout << str << endl;
}
int main() {

    Student s1 = {"jim",12,12};
    print(s1.name);
    print(s1.age);

}

```

struct arr


```sh
Student arr[] = {
            {"jim",12,12},
            {"jim1",12,12},
            {"jim2",12,12},
    };
int len = sizeof(arr)/sizeof(Student);
for (int i = 0; i < len; ++i) {
    print(arr[i].name);
    print(arr[i].age);
}
```

struct pointer

```sh
#include <iostream>

using namespace std;

struct Student{
    string name;
    int age;
    int score;
};
void print(const string& str){
    cout << str << endl;
}
void print(int str){
    cout << str << endl;
}
int main() {

    Student s1 = {"jim",12,12};
    Student *s2 = &s1;
    print(s2->name);
    print(s2->age);
}

```

pointer set value

```sh
#include <iostream>

using namespace std;

struct Student{
    string name;
    int age;
    int score;
};
struct Teacher{
    int id;
    string name;
    int age;
    Student student;
};
void print(const string& str){
    cout << str << endl;
}
void print(int str){
    cout << str << endl;
}
void setName(Student *s){
    s->name = "bob";
}
int main() {

    Student s1 = {"jim",12,12};
    Teacher teacher = {1,"t2",32,s1};
    setName(&teacher.student);
    print(teacher.student.name);
}
```

const struct pointer

```sh
void setName(const Student *s){
    print(s->name);
}
int main() {

    Student s1 = {"jim",12,12};
    Teacher teacher = {1,"t2",32,s1};
    setName(&teacher.student);
//    print(teacher.student.name);
}
```

