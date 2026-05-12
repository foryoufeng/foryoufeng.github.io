# stack

basic

```sh
body:Stack(
  alignment: Alignment.center,
  children: [
    Container(
      width: 300,
      height: 300,
      color: Colors.blue,
    ),
    Container(
      width: 200,
      height: 200,
      color: Colors.red,
    ),
    Container(
      width: 100,
      height: 100,
      color: Colors.green,
    ),
  ],
),
```

Positioned

```sh
body:Container(
  width: double.infinity,
  height: double.infinity,
  child:Stack(
    children: [
      Container(
        width: 100,
        height: 100,
        color: Colors.blue,
      ),
      Positioned(
          left: 10,
          top: 10,
          child: Container(
            width: 50,
            height: 50,
            color: Colors.red,
          )
      ),
      Positioned(
          right: 10,
          bottom: 10,
          child: Container(
            width: 50,
            height: 50,
            color: Colors.green,
          )
      ),
      Positioned(
          left: 10,
          bottom: 10,
          child: Container(
            width: 50,
            height: 50,
            color: Colors.green,
          )
      ),
      Positioned(
          right: 10,
          top: 10,
          child: Container(
            width: 50,
            height: 50,
            color: Colors.green,
          )
      ),
    ],
  )
),
```