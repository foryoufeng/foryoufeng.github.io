# random


```sh
int randomNumber(){
    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_int_distribution<>  dist(0,99);
    return dist(gen);
}
int main() {
    print(randomNumber());
}
```