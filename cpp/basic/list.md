# list

basic

```sh
#include <list>
using namespace std;

int main() {
    list<int> l;
    for (int i = 0; i < 10; ++i) {
        l.push_back(i);
    }
    for (const int i:l) {
        cout << i << endl;
    }
}

```

