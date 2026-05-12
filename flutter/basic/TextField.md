# TextField


```sh
import 'package:flutter/material.dart';

void main() {
  runApp(PageMain());
}


class PageMain extends StatefulWidget{

  const PageMain({super.key});

  @override
  State<StatefulWidget> createState() => _PageMain();

}

class _PageMain extends State<PageMain>{
  TextEditingController _phoneController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();
  int count = 0;
  void onPressedAdd(){
    setState(() {
      count++;
    });
  }
  void onPressedJian(){
    setState(() {
      count--;
    });
  }

  List<Widget> getList(){
    return List.generate(10, (index){
      return Container(
        width: 100,
        height: 100,
        color: Colors.blue,
      );
    });
  }
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "hello",
      home: Scaffold(
        appBar: AppBar(
          title: Text("login"),
        ),
        body:Container(
          width: double.infinity,
          height: double.infinity,
          color: Colors.white,
          padding: EdgeInsets.all(10),
          child:Column(
            children: [
              TextField(
                controller: _phoneController,
                onChanged: (value){
                  print(value);
                },
                decoration: InputDecoration(
                    contentPadding: EdgeInsets.only(left: 20),
                    hintText: "username",
                    fillColor: Colors.amber,
                    filled: true,
                    border: OutlineInputBorder(
                        borderSide: BorderSide.none,
                        borderRadius: BorderRadius.circular(25)
                    )
                ),
              ),
              SizedBox(height:20),
              TextField(
                controller: _passwordController,
                obscureText: true,
                decoration: InputDecoration(
                    contentPadding: EdgeInsets.only(left: 20),
                    hintText: "password",
                    fillColor: Colors.amber,
                    filled: true,
                    border: OutlineInputBorder(
                      borderSide: BorderSide.none,
                      borderRadius: BorderRadius.circular(25)
                    )
                ),
              ),
              SizedBox(height:20),
              Container(
                height: 50,
                width: double.infinity,
                decoration: BoxDecoration(
                  color: Colors.black,
                  borderRadius: BorderRadius.circular(25)
                ),
                child: TextButton(onPressed: (){
                    print("phone=${_phoneController.text},password=${_passwordController.text}");
                }, child: Text("login",style: TextStyle(color: Colors.white),)),
              )
            ],
          )
        ),
          // child: ,
        bottomNavigationBar: Container(
          height: 80,
          child: Center(
            child: Text("bottom")
          )
        ),
      ),
    );
  }
}

```