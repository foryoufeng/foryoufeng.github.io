# basic


```sh
import 'package:flutter/material.dart';

void main() {
  // runApp(const MyApp());
  runApp(MaterialApp(
    title:"hello flutter",
    // theme: ThemeData(scaffoldBackgroundColor: Colors.blue),
    home: Scaffold(
      appBar: AppBar(
        title: Text("header"),
      ),
      body: Container(
        child: Center(
          child: Text("center"),
        ),
      ),
      bottomNavigationBar: Container(
        height: 80,
        child: Center(
          child: Text("bottom"),
        ),
      ),
    ),
  ));
}
```

StatelessWidget


```sh
import 'package:flutter/material.dart';

void main() {
  runApp(PageMain());
}
class PageMain extends StatelessWidget{

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "hello",
      home: Scaffold(
        appBar: AppBar(
          title: Text("header"),
        ),
        body: Container(
          child: Center(
            child: Text("center page main"),
          ),
        ),
        bottomNavigationBar: Container(
          height: 80,
          child: Center(
            child: Text("bottom"),
          ),
        ),
      ),
    );
  }

}
```

StatefulWidget

```sh
import 'package:flutter/material.dart';

void main() {
  runApp(PageMain());
}
class PageMain extends StatefulWidget{

  const PageMain({super.key});

  @override
  State<StatefulWidget> createState() {
    return _PageMain();
  }

}

class _PageMain extends State<PageMain>{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "hello",
      home: Scaffold(
        appBar: AppBar(
          title: Text("hello"),
        ),
        body: Container(
          child: Center(
            child:  Text("body"),
          ),
        ),
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

`stful` to create StatefulWidget
`stless` to create StatelessWidget