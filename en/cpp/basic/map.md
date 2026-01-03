# map

basic

```sh
#include <map>
using namespace std;

int main() {
    map<string,int> m;
    m.insert(pair<string,int>("jim",12));
    m.insert(pair<string,int>("jim1",13));
    m.insert(pair<string,int>("jim2",14));
    m.insert(pair<string,int>("jim3",15));
    for (const auto& [name, age] : m) {
        cout << name << " is " << age << " years old" << endl;
    }
}
```