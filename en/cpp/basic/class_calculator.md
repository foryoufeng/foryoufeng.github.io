# class calculator


```sh
#include <iostream>

using namespace std;

class Person{
public:
    int a;
    int b;
    Person(int a , int b){
        this->a = a;
        this->b = b;
    }
    [[nodiscard]] int add() const{
        return this->a + this->b;
    }
};
Person operator+(Person &p1,Person&p2){
    Person temp(1,2);
    temp.a = p1.a+p2.a;
    temp.b = p1.b+p2.b;
    return temp;
}
int main() {
    Person p1(1,2);
    Person p2(3,4);
    Person p3 = p1 + p2;
    cout << p3.add() << endl;

}

```