# CustomScrollView


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
              child: Container(
                color: Colors.blue,
                alignment: Alignment.center,
                height: 260,
                child: Text("hello",style: TextStyle(color: Colors.white,fontSize: 30),),
              ),
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