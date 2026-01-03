# class extend

basic

```sh
class Page{
public:
    int a = 100;
    void header(){
        cout << "header" << endl;
    }
    void footer(){
        cout << "footer" << endl;
    }
};
class Java:public Page{
public:
    int a = 200;
    void content(){
        this->header();
        cout << "java content" << endl;
        this->footer();
    }
};

class Python : virtual public Page{
public:
    void content(){
        this->header();
        cout << "python content" << endl;
        this->footer();
    }
};

int main() {

    Java j;
    j.content();
    cout << j.a << endl;
    cout << j.Page::a << endl;
    Python p;
    p.content();
}
```

