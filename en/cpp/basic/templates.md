# templates

function

```sh
template<typename T>
void myswap(T &a,T &b){
    T temp = a;
    a = b;
    b = temp;
}
int main() {
    int a=10;
    int b =20;
    myswap<int>(a,b);
    cout <<"a="<< a << endl;
    cout <<"b="<< b << endl;

}
```

class 


```sh
template<class NameType,class AgeType>
class Person{
public:
    NameType name;
    AgeType age;
    Person(NameType name,AgeType age){
        this->name = name;
        this->age = age;
    }
};
int main() {
  Person<string,int> p("jim",12);
  cout << p.name <<p.age << endl;

}
```

class function

```sh
template<class NameType,class AgeType>
class Person{
public:
    NameType name;
    AgeType age;
    Person(NameType name,AgeType age){
        this->name = name;
        this->age = age;
    }
    void show(){
        cout << "name="<<this->name<<",age="<<this->age << endl;
    }
};

template<class T1,class T2>
void print(Person<T1,T2>&p){
    p.show();
    cout << "T1="<< typeid(T1).name() << endl;
    cout << "T2="<< typeid(T2).name() << endl;
}
template<class T>
void print2(T &p){
    p.show();
    cout << "T1="<< typeid(T).name() << endl;
}
```

class extend

```sh

template<class T>
class Base{
    T m;
};
class Son :public Base<int>{

};
template<class T1,class T2>
class Son2 :public Base<T2>{
   T1 s;
};
int main() {
    Son s;
    Son2<int,char> s2{};

}
```

use

```sh
#pragma once
#include <iostream>
using namespace std;

template<class T>
class MyArray{
public:
    MyArray(int capacity){
        this->capacity = capacity;
        this->size = 0;
        this->address = new T[this->capacity];
    }
    MyArray(const MyArray&arr){
        this->capacity = arr.capacity;
        this->size = arr.size;
        this->address = new T[arr.capacity];
        for (int i = 0; i < this->size; i++) {
            this->address[i] = arr.address[i];
        }
    }
    MyArray &operator=(const MyArray&arr){
        if(this->address !=NULL){
            delete[] this->address;
            this->address = NULL;
            this->capacity = 0;
            this->size = 0;
        }
        this->capacity = arr.capacity;
        this->size = arr.size;
        this->address = new T[arr.capacity];
        for (int i = 0; i < this->size; i++) {
            this->address[i] = arr.address[i];
        }
        return *this;
    }
    ~MyArray(){
        if(this->address !=NULL){
            delete[] this->address;
            this->address = NULL;
        }
    }
    void Push_Back(const T & val){
        if(this->capacity == this->size){
            return;
        }
        this->address[this->size] = val;
        this->size++;
    }
    void Pop_Back(){
        if(this->size ==0){
            return;
        }
        this->size--;
    }
    T& operator[](int index){
        return this->address[index];
    }
    int getCapacity(){
        return this->capacity;
    }
    int getSize(){
        return this->size;
    }
private:
    int capacity;
    int size;
    T * address;
};
void print(MyArray<int> &arr){
    for (int i = 0; i < arr.getSize(); ++i) {
        cout << arr[i] << endl;
    }
}

int main() {
   MyArray<int> arr(5);
    for (int i = 0; i < 5; i++) {
        arr.Push_Back(i);
    }
    print(arr);
   MyArray<int> arr2(arr);
    print(arr2);
    arr2.Pop_Back();
    print(arr2);

}
```

