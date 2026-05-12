# stack

basic

```sh
int main() {
    stack<int> d;
    d.push(1);
    d.push(2);
    while (!d.empty()) {
        cout << d.top() << endl;
        d.pop();
    }
    cout << d.size() << endl;
}
```

