# table



```sh
<table border="1" width="400" cellspacing="0"  height="600">
    <caption>学生信息</caption>
    <thead align="center" valign="middle" height="300">
    <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>民族</th>
        <th>政治面貌</th>
    </tr>
    </thead>
    <tbody style="text-align: center">
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>20</td>
        <td>汉</td>
        <td>团员</td>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>20</td>
        <td>汉</td>
        <td>团员</td>
    </tr>
    </tbody>
</table>
```

row span

```sh
<table border="1" width="400" cellspacing="0"  height="600">
    <caption>学生信息</caption>
    <thead align="center" valign="middle" height="300">
    <tr>
        <th>星期</th>
        <th colspan="5">上课</th>
        <th colspan="2">周末</th>
    </tr>
    </thead>
    <tbody style="text-align: center">
    <tr>
        <td rowspan="4">上午</td>
        <td>星期一</td>
        <td>星期二</td>
        <td>星期三</td>
        <td>星期四</td>
        <td>星期五</td>
        <td>星期六</td>
        <td>星期日</td>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>20</td>
        <td>汉</td>
        <td>团员</td>
        <td>团员</td>
        <td>团员</td>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>20</td>
        <td>汉</td>
        <td>团员</td>
        <td>团员</td>
        <td>团员</td>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>20</td>
        <td>汉</td>
        <td>团员</td>
        <td>团员</td>
        <td>团员</td>
    </tr>
    <tr>
        <td rowspan="2">下午</td>
        <td>男</td>
        <td>20</td>
        <td>汉</td>
        <td>团员</td>
        <td>团员</td>
        <td>团员</td>
        <td rowspan="2">团员</td>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>20</td>
        <td>汉</td>
        <td>团员</td>
        <td>团员</td>
    </tr>
    </tbody>
</table>
```