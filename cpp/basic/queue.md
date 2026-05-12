# queue

basic

```sh
int main() {
    queue<int> d;
    d.push(1);
    d.push(2);
    while (!d.empty()) {
        cout << d.front() << endl;
        d.pop();
    }
    cout << d.size() << endl;
}
```