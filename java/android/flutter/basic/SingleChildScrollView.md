# single child scroll view


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

  List<Widget> getList(){
    return List.generate(100, (index){
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
        body:Container(
          width: double.infinity,
          height: double.infinity,
          color: Colors.white,
          padding: EdgeInsets.all(10),
          child:SingleChildScrollView(
            child: Column(
              children: getList(),
            ),
          )
        ),
      ),
    );
  }
}

```

with position

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
    return List.generate(100, (index){
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
        body:Stack(
          children: [

            Container(
                width: double.infinity,
                height: double.infinity,
                color: Colors.white,
                child:SingleChildScrollView(
                  controller: _scrollController,
                  padding: EdgeInsets.all(20),
                  child: Column(
                    children: getList(),
                  ),
                )
            ),
            Positioned(
                right: 40,
                bottom: 40,
                child: GestureDetector(
                  onTap: (){
                    // _scrollController.jumpTo(0);
                    _scrollController.animateTo(0, duration: Duration(seconds: 1), curve: Curves.bounceIn);
                  },
                  child: Container(
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        color: Colors.red,
                        borderRadius: BorderRadius.circular(25)
                    ),
                    alignment: Alignment.center,
                    child: Text("top",style: TextStyle(color: Colors.white,fontSize: 20),),
                  ),
                )
            ),
            Positioned(
                right: 40,
                top: 40,
                child: GestureDetector(
                    onTap: (){
                      // _scrollController.jumpTo(_scrollController.position.maxScrollExtent);
                      _scrollController.animateTo(_scrollController.position.maxScrollExtent, duration: Duration(seconds: 1), curve: Curves.bounceIn);
                    },
                    child: Container(
                      width: 80,
                      height: 80,
                      decoration: BoxDecoration(
                          color: Colors.red,
                          borderRadius: BorderRadius.circular(40)
                      ),
                      alignment: Alignment.center,
                      child: Text("bottom",style: TextStyle(color: Colors.white,fontSize: 20),),
                    )
                )
            ),
          ],
        )


      ),
    );
  }
}

```

more


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
  PageController _controller = PageController();
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "hello",
      home: Scaffold(
        appBar: AppBar(
          title: Text("login"),
        ),
        body: CustomScrollView(
          slivers: [
            SliverToBoxAdapter(
              child: Stack(
                children: [
                  Container(
                    color: Colors.blue,
                    alignment: Alignment.center,
                    height: 260,
                    child: PageView.builder(
                        controller: _controller,
                        itemCount: 10,
                        itemBuilder: (BuildContext context,int index){
                          return Container(
                            alignment: Alignment.center,
                            child: Text("hello $index",style: TextStyle(color: Colors.white,fontSize: 30),),
                          );
                        }),
                  ),
                  Positioned(
                    bottom: 0,
                      left: 0,
                      right: 0,
                      // height: 20,
                      child: Container(
                        // color: Colors.red,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: List.generate(10, (index){
                            return GestureDetector(
                                onTap: (){
                                  setState(() {
                                    // _controller.jumpToPage(index);
                                    _controller.animateToPage(index, duration: Duration(milliseconds: 300), curve: Curves.bounceIn);
                                    _currentIndex = index;
                                  });
                                },
                                child: Container(
                                  margin: EdgeInsets.only(left: 10),
                                  width: 10,
                                  height: 10,
                                  decoration: BoxDecoration(
                                    color: _currentIndex == index?Colors.red:Colors.white,
                                    borderRadius: BorderRadius.circular(5)
                                  ),
                                ),
                            );
                          }),
                        ),
                      )
                  )
                ],
              )
            ),
            SliverToBoxAdapter(
              child: SizedBox(height: 10,),
            ),
            SliverPersistentHeader(
                delegate: _StickyCategory(),
                pinned: true,
            ),
            SliverToBoxAdapter(
              child: SizedBox(height: 10,),
            ),
            SliverList.separated(itemBuilder: (BuildContext context,int index){
              return Container(
                height: 100,
                alignment: Alignment.center,
                color: Colors.blue,
                child: Text("list $index",style: TextStyle(color: Colors.white),),
              );
            }, separatorBuilder: (BuildContext context,int index){
              return SizedBox(height: 20,);
            })
          ],
        )
      ),
    );
  }
}

class _StickyCategory extends SliverPersistentHeaderDelegate{
  @override
  Widget build(BuildContext context, double shrinkOffset, bool overlapsContent) {
    return Container(
      color: Colors.white,
      child: ListView.builder(
          itemCount: 30,
          scrollDirection: Axis.horizontal,
          itemBuilder: (BuildContext context,int index){
          return Container(
            width: 100,
            color: Colors.blue,
            margin: EdgeInsets.symmetric(horizontal: 10),
            alignment: Alignment.center,
            child: Text("hello $index",style: TextStyle(color: Colors.white,fontSize: 20,),),
          );
      }),
    );
  }

  @override
  double get maxExtent => 200;

  @override
  double get minExtent => 60;

  @override
  bool shouldRebuild(covariant SliverPersistentHeaderDelegate oldDelegate) {
    return false;
  }

}
```