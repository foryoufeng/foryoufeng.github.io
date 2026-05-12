# STL

vector

```sh
#include <iostream>
#include <algorithm>
using namespace std;

void myPrint(int val){
    cout << val << endl;
}

void print(){
    vector<int> v;
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    vector<int>::iterator itBegin = v.begin();
    vector<int>::iterator itEnd = v.end();
    while (itBegin!=itEnd){
        cout << *itBegin << endl;
        itBegin++;
    }
    for (vector<int>::iterator it=v.begin(); it!=v.end() ; it++) {
        cout << *it << endl;
    }
    for_each(v.begin(),v.end(), myPrint);
    for (const int item: v) {
        cout << item << endl;
    }
}

int main() {
   print();


}

```

custom type

```sh
class Person{
public:
    Person(string name,int age){
        this->name = name;
        this->age = age;
    }
    void show(){
        cout << "name="<<this->name<<",age="<<this->age << endl;
    }
private:
    string name;
    int age;
};
void myPrint(Person &p){
    p.show();
}
void print(){
    vector<Person> v;
    Person p1("jim",12);
    Person p2("jim2",12);
    Person p3("jim3",12);
    Person p4("jim4",12);
    v.push_back(p1);
    v.push_back(p2);
    v.push_back(p3);
    v.push_back(p4);
    for_each(v.begin(),v.end(), myPrint);

}

int main() {
   print();
}

```

vector array

```sh
int main() {
    vector<vector<int>> v;
    vector<int> v1;
    vector<int> v2;
    vector<int> v3;
    vector<int> v4;
    for (int i = 0; i < 4; ++i) {
        v1.push_back(i);
        v2.push_back(i+1);
        v3.push_back(i+2);
        v4.push_back(i+3);
    }
    v.push_back(v1);
    v.push_back(v2);
    v.push_back(v3);
    v.push_back(v4);
    for (auto it=v.begin(); it!=v.end() ; it++) {
        for (auto it2=(*it).begin(); it2!=(*it).end() ; it2++) {
                cout << (*it2)<<" ";
        }
        cout << "   " << endl;
    }
}
```

save object

```sh

class Person {
public:
    int id;
    Person(int id) {
        this->id = id;
    };
    void show() {
        cout << this->id << endl;
    }
};
int main() {
    const Person p(1);
    const Person p2(2);
    const Person p3(3);
    const Person p4(4);
    const Person p5(5);
    vector<Person> list;
    list.push_back(p);
    list.push_back(p2);
    list.push_back(p3);
    list.push_back(p4);
    list.push_back(p5);
    for (Person person: list) {
        person.show();
    }
}

```

method

```sh

int main() {
    vector<int> v;
    v.push_back(1);
    v.push_back(2);
    bool flag = v.empty();
    cout << flag << endl;
    int size = v.size();
    int size2 = v.capacity();
    cout << size2 << endl;
    v.resize(10);
    cout << size << endl;
    size2 = v.capacity();
    cout << size2 << endl;
    int a = v.back();
    cout << a << endl;
    int b = v.at(1);
    cout << b << endl;
    int d = v[0];
    cout << d << endl;
    int c = v.front();
    cout << c << endl;
}

```

use

```sh
int main() {
    vector<int> v;
    for (int i = 0; i < 100000; ++i) {
        v.push_back(i);
    }
    cout << "capacity="<<v.capacity() << endl;
    cout << "size="<<v.size() << endl;
    v.resize(3);
    cout << "capacity="<<v.capacity() << endl;
    cout << "size="<<v.size() << endl;
    v.shrink_to_fit();
    cout << "capacity="<<v.capacity() << endl;
    cout << "size="<<v.size() << endl;
}
```