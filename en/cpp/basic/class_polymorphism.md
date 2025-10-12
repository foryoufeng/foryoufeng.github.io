# class



```sh
class Animal{
public:
     virtual void speak(){
        cout << "Animal speak" << endl;
    }
};
class Cat:public Animal{
public:
    void speak(){
        cout << "cat speak" << endl;
    }
};
void doSpeak(Animal *animal){
    animal->speak();
}
int main() {
      Cat c;
      doSpeak(&c);
}

```

virtual class


```sh
#include <iostream>

using namespace std;


class AbstructCalculator{
public:
    int a;
    int b;
    virtual int result()=0;
    virtual ~AbstructCalculator() = default;
};
class AddCalculator:public AbstructCalculator{
public:
    int result(){
        return a + b;
    }
};
class SubCalculator:public AbstructCalculator{
public:
    int result(){
        return a - b;
    }
};
class MulCalculator:public AbstructCalculator{
public:
    int result(){
        return a * b;
    }
};
class DevCalculator:public AbstructCalculator{
public:
    int result(){
        return a / b;
    }
};

int main() {
    AbstructCalculator *c = new AddCalculator;
    c->a = 10;
    c->b = 10;
    cout << c->result() << endl;
    delete c;
    c = new DevCalculator;
    c->a = 10;
    c->b = 10;
    cout << c->result() << endl;
    delete c;
}

```