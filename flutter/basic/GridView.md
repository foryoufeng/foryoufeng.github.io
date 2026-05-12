# grid view


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
  ScrollController _scrollController = ScrollController();

  List<Widget> getList(){
    return List.generate(20, (index){
      index++;
      return Container(
        width: double.infinity,
        height: 100,
        color: Colors.blue,
        margin: EdgeInsets.only(bottom: 10),
        alignment: Alignment.center,
        child: Text("hello $index world",style: TextStyle(color: Colors.white,fontSize: 20,),),
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
        body:GridView.count(
              scrollDirection: Axis.vertical,
             padding: EdgeInsets.all(10),
             crossAxisCount: 3,
             mainAxisSpacing: 10,
             crossAxisSpacing: 10,
             children: getList(),
        )
      ),
    );
  }
}

```

grid extent

```sh
 body:GridView.extent(
     scrollDirection: Axis.vertical,
     padding: EdgeInsets.all(10),
     maxCrossAxisExtent: 100,
     mainAxisSpacing: 10,
     crossAxisSpacing: 10,
     children: getList(),
)
```

builder

```sh
Widget build(BuildContext context) {
    return MaterialApp(
      title: "hello",
      home: Scaffold(
        appBar: AppBar(
          title: Text("login"),
        ),
        body: GridView.builder(
            padding: EdgeInsets.all(10),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 4,
                mainAxisSpacing: 10,
              crossAxisSpacing: 10,
              childAspectRatio: 0.5,
            ),
            itemBuilder: (BuildContext context,int index){
              return Container(
                width: double.infinity,
                height: 100,
                color: Colors.blue,
                margin: EdgeInsets.only(bottom: 10),
                alignment: Alignment.center,
                child: Text("hello $index world",style: TextStyle(color: Colors.white,fontSize: 20,),),
              );
        }),
      ),
    );
  }
```