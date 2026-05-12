# css

link 

```html
<link rel="stylesheet" href="index.css">
```

select odd

```sh
 div>p:nth-child(2n+1){
      font-size: 30px;
      color: #00539f;
  }
```

disable select 

```sh
 p {
    user-select: none;
  }
```

!import > line style > id select > class select > element select > common select

```sh
!import > style="width:100px" > #id >.class > h1 > *
```


font 

```sh
font-weight:bold;
font: 600 100px "Microsoft yahei";
```

line-height 

```sh
line-height:10px;
```

font color
```sh
.gradient-text {
    font-size: 48px;
    font-family: Arial, sans-serif;
    background-image: linear-gradient(90deg, #4752e6, #de81de 50%);
    -webkit-background-clip: text;
    background-clip: text; 
    color: transparent;
    display: inline-block;
}
```