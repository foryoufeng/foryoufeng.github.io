# wrap


```sh
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
          title: Text("hello"),
        ),
        body:Container(
          width: double.infinity,
          height: double.infinity,
          color: Colors.amber,
          child: Wrap(
            spacing: 10,
            runSpacing: 10,
            alignment: WrapAlignment.start,
            direction: Axis.horizontal,
            children: getList(),
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
```