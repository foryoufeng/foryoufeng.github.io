# string

basic use

```sh
int main() {
    const char *c1="hello world";
    string s1(c1);
    string s2(c1,5);
    string s3(10,'a');
    cout << s1 << endl;
    cout << s2 << endl;
    cout << "s3="<<s3 << endl;
}
```

find and replace

```sh
int main() {
    string s1="hello";
    int num = s1.find("ll");
    cout << num << endl;
    string s2=s1.replace(0,2,"wo");
    cout << s2 << endl;
}
```
for str

```sh
int main() {
    string s1="hello";
    for (int i=0;i<s1.size();i++) {
        cout << s1[i]<<endl;
    }
}
```

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