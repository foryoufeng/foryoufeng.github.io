# css select

class 

```sh
.item{
  font-size:20px;
}
```

or class

```sh
.item,.item2{
  color:red;
}
```

element and class

```sh
p.item{
  font-size:16px;
}
```

select widget

```sh
(id,class,element)
```

child select

```sh
ul li{
  color:red;
}
```
son select

```sh
div>a{
  color:red;
}
```

bro select

```sh
div+p{
  color:red;
}
//bottom all p
div~p{
  color:red;
}
```

attribute select

```sh
[title]{
    color: green;
}
[title="aa"]{
    color: green;
}
/*start with a*/
[title^="a"]{
    color: green;
}
/*end with a*/
[title$="a"]{
    color: green;
}
```

fake select

```sh
 a:hover{
    text-decoration: underline;
    color: red;
}
```

select

```sh
div>a:first-child{
    color: green;
}
div>a:nth-child(2n){
    color: salmon;
}
div>a:nth-child(-n+3){
    color: salmon;
}
div>a:nth-child(2n-1){
    color: salmon;
}
div>a:first-of-type{
    color: salmon;
}
p::before{
    content: '$';
}
```