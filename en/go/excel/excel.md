# excel

install

```sh
go get github.com/xuri/excelize/v2
```

basic write

```sh
package main

import (
    "fmt"
    "github.com/xuri/excelize/v2"
)

func main() {
    f := excelize.NewFile()
    sheet := "Sheet1"

    // 写表头
    f.SetCellValue(sheet, "A1", "ID")
    f.SetCellValue(sheet, "B1", "Name")
    f.SetCellValue(sheet, "C1", "Score")

    // 模拟批量插入数据
    for i := 1; i <= 10000; i++ {
        f.SetCellValue(sheet, fmt.Sprintf("A%d", i+1), i)
        f.SetCellValue(sheet, fmt.Sprintf("B%d", i+1), fmt.Sprintf("User-%d", i))
        f.SetCellValue(sheet, fmt.Sprintf("C%d", i+1), i*10)
    }

    // 保存
    if err := f.SaveAs("bulk.xlsx"); err != nil {
        panic(err)
    }

    fmt.Println("✅ 数据已写入 bulk.xlsx")
}

```

stream write

```sh
package main

import (
    "fmt"
    "time"

    "github.com/xuri/excelize/v2"
)

func main() {
    start := time.Now() // 记录开始时间

    f := excelize.NewFile()
    streamWriter, err := f.NewStreamWriter("Sheet1")
    if err != nil {
        panic(err)
    }

    // 写入表头
    header := []interface{}{"ID", "Name", "Score"}
    cell, _ := excelize.CoordinatesToCellName(1, 1)
    streamWriter.SetRow(cell, header)

    // 模拟写入大量数据
    for i := 1; i <= 100000; i++ {
        row := []interface{}{i, fmt.Sprintf("User-%d", i), i * 10}
        cell, _ := excelize.CoordinatesToCellName(1, i+1)
        streamWriter.SetRow(cell, row)
    }

    // 结束流式写入
    if err := streamWriter.Flush(); err != nil {
        panic(err)
    }

    // 保存文件
    if err := f.SaveAs("stream.xlsx"); err != nil {
        panic(err)
    }

    duration := time.Since(start) // 计算耗时
    fmt.Printf("✅ 写入完成，耗时：%v\n", duration)
}

```

read 

```sh
package main

import (
    "fmt"
    "github.com/xuri/excelize/v2"
)

func main() {
    f, err := excelize.OpenFile("example.xlsx")
    if err != nil {
        fmt.Println("open error:", err)
        return
    }

    // 读取单个单元格
    cell, err := f.GetCellValue("Sheet1", "A2")
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println("A2 =", cell)

    // 读取整行
    rows, err := f.GetRows("Sheet1")
    if err != nil {
        fmt.Println(err)
        return
    }

    for _, row := range rows {
        fmt.Println(row)
    }
}

```