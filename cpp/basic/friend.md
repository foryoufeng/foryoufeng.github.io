# friend

friend method


```sh
class Building{
    friend void goodGay(Building *building);
public:
    string room;
    Building(){
        room ="room";
        bedroom="bedroom";
    }
private:
    string bedroom;
};
void goodGay(Building *building){
    cout << building->room << endl;
    cout << building->bedroom << endl;
}

int main() {
    Building building;
    goodGay(&building);
}
```

friend class 

```sh

class Building;
class GoodGay{
public:
    GoodGay();
    void visit();
private:
    Building *building;
};

class Building{
    friend class GoodGay;
public:
    string room;
    Building(){
        room ="room";
        bedroom="bedroom";
    }
private:
    string bedroom;
};
GoodGay::GoodGay() {
    building = new Building;
}
void GoodGay::visit(){
    cout << building->room << endl;
    cout << building->bedroom << endl;
}
int main() {
    GoodGay goodGay;
    goodGay.visit();
}
```

