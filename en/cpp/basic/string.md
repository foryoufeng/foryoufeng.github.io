# string

get length

```sh
void print(int str){
    cout << str << endl;
}
int main() {
    string s="hello world";
    int len = static_cast<int>(s.size());
    print(len);
}
```