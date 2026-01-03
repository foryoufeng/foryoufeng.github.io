# list view


```sh
@override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "hello",
      home: Scaffold(
        appBar: AppBar(
          title: Text("login"),
        ),
        body:ListView.builder(
          itemCount: 100,
          itemBuilder: (BuildContext context,int index){
            return Container(
              width: double.infinity,
              height: 100,
              color: Colors.blue,
              margin: EdgeInsets.only(bottom: 10),
              alignment: Alignment.center,
              child: Text("hello $index world",style: TextStyle(color: Colors.white,fontSize: 20,),),
            );
          },
          controller: _scrollController,
          padding: EdgeInsets.all(20),
        )
      ),
    );
  }
```