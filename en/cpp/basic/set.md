# set

basic

```sh
#include <set>
using namespace std;

int main() {
    set<int> l;
    for (int i = 0; i < 10; ++i) {
        l.insert(i);
    }
    for (const int i:l) {
        cout << i << endl;
    }
}
```