# file

write file

```sh
#include <iostream>
#include <fstream>
using namespace std;


int main() {

    ofstream ofs;
    ofs.open("1.txt",ios::out);
    ofs<<"hello world"<<endl;
    ofs<<"hello world"<<endl;
    ofs<<"hello world"<<endl;
    ofs.close();
    cout << "success" << endl;
}

```

read file

```sh
#include <iostream>
#include <fstream>
using namespace std;


int main() {

    ifstream ifs;
    string name = "1.txt";
    ifs.open(name,ios::in);
    if(!ifs.is_open()){
        cout << name <<" open failed" << endl;
        return 0;
    }
    string buf;
    while (getline(ifs,buf)){
        cout << buf << endl;
    }
    ifs.close();

}

```

write binary

```sh
#include <iostream>
#include <fstream>
using namespace std;

class Person{
public:
    char name[64];
    int age;
};

int main() {
    ofstream ofs("person.txt",ios::out|ios::binary);
    Person p ={"jim",18};
    ofs.write((const char *)&p, sizeof(p));
    ofs.close();

}

```

read binary

```sh
#include <iostream>
#include <fstream>
using namespace std;

class Person{
public:
    char name[64];
    int age;
};

int main() {
    ifstream ifs("person.txt",ios::in);
    if(!ifs.is_open()){
        cout << "file not exist" << endl;
        return 0;
    }
    Person p{};
    ifs.read((char *)&p, sizeof(p));
    cout << p.name<<p.age << endl;
    ifs.close();

}

```