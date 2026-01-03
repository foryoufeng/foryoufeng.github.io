# class

basic

```sh
#include <iostream>
#include <random>

using namespace std;

class Circle{
public:
    int str{};
    const double PI = 3.14;
    double cal(){
        return 2 * PI * str;
    }

};
int main() {
    auto *c = new Circle;
    c->str = 100;
    cout << c->cal() << endl;
    delete c;
}

```

constructor

```sh
lass Circle{

public:
    Circle(){
        cout << "constructor" << endl;
    }
    ~Circle(){
        cout << "end" << endl;
    }
};
int main(){
    //Circle c1(); do not use this
    Circle c1;
}
```

get object

```sh
class Person {

public:
    Person() {
        cout << "Person() called" << endl;
    }
    Person(int age) {
        cout << "Person() int age called" <<age<< endl;
    }
    ~Person() {
        cout << "~Person() called" << endl;
    }
};

int main() {
    Person p;
    Person p2(2);
    Person p3 = Person(3);
    Person p4 = 4;
}
```

copy constructor

```sh
int main() {
    Circle c;
    c.str = 100;
    Circle c2(c);
    cout << c2.cal() << endl;
}
```

deep copy

```sh
#include <iostream>
#include <random>

using namespace std;

class Person{
private:
    int * m_height;
    int m_width;
public:

    Person(int width,int height){
        m_width = width;
        m_height = new int(height);
        cout << "init" << endl;
    }
    ~Person(){
        if(m_height!= nullptr){
            delete m_height;
            m_height = nullptr;
        }
        cout << "end" << endl;
    }
    Person(const Person &p){
        m_width = p.m_width;
        m_height = new int(*p.m_height);
    }

    int sum(){
        return m_width * (*m_height);
    }
};

int main() {
    Person p(12,11);
    Person p2(p);
    cout << p.sum() << endl;
    cout << p2.sum() << endl;
}
```

init list

```sh
class Person{

public:
    int A;
    int B;
    int C;
    Person(int a,int b,int c):A(a),B(b),C(c){

    }
    int sum(){
        return A+B+C;
    }
};

int main() {
    Person p(1,2,3);
    cout << p.sum() << endl;
}
```

this

```sh
class B{
    int age;
public:
    B(int age){
        this->age = age;
    }
    void say(){
        cout << "hello " << this->age << endl;
    }
    B add(B &b){
        this->age += b.age;
        return *this;
    }
};

int main() {
    B b(12);
    b.say();
    B b2(13);
    b2 = b2.add(b).add(b);
    b2.say();
}
```

const 

```sh
class B{
   mutable int age;
public:
    void setAge()const{
        this->age = 10;
    }
    B(int age){
        this->age = age;
    }
};

int main() {
    B b(12);
}
```

this


```sh
class User {
public:

    int age=0;
    mutable string name;
    static int number;
    User& setAge(int age) {
        this->age += age;
        return *this;
    }
    void setName(string name) const {
        this->name = std::move(name);
    }
};
int main() {
    User u;
    u.setAge(10).setAge(20).setAge(30);
    cout << u.age << endl;
}
```