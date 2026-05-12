# functor

basic


```sh
using namespace std;

class Object {
public:
    int operator()(int a ,int b) const {
        return a + b;
    }
};

int main() {
    Object object;
    int sum = object(1,2);
    cout << sum << endl;
}
```

sort

```sh
#include <algorithm>
#include <iostream>
#include <functional>
using namespace std;


int main() {
    vector<int> v;
    v.push_back(1);
    v.push_back(4);
    v.push_back(5);
    v.push_back(2);
    v.push_back(3);
    ranges::sort(v,greater<int>());
    for (const int i:v) {
        cout << i << endl;
    }
}
```