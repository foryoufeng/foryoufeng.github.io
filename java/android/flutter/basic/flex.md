# flex


```sh
child: Flex(
  direction: Axis.horizontal,
  children: [
    Expanded(
      flex: 2,
      child: Container(
        color: Colors.red,
        width: 100,
        height: 100,
       )
    ),
    Expanded(
        flex: 1,
        child: Container(
          color: Colors.green,
          width: 100,
          height: 100,
        )
    )
  ],
)
```