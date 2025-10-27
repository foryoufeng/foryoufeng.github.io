# file

basic

```sh
func main() {
	file, err := os.Open("main.go")
	defer func(file *os.File) {
		err := file.Close()
		if err != nil {
			panic(err)
		}
	}(file)
	if err != nil {
		fmt.Println("打开文件失败", err)
	}
	var strSlice []byte
	var tempSlice = make([]byte, 512)
	for {
		n, err := file.Read(tempSlice)
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Println("打开读取失败", err)
		}
		strSlice = append(strSlice, tempSlice[:n]...)
	}

	fmt.Println(string(strSlice))
}
```

use bufio to read file

```sh
func main() {
	file, err := os.Open("main.go")
	defer func(file *os.File) {
		err := file.Close()
		if err != nil {
			panic(err)
		}
	}(file)
	if err != nil {
		fmt.Println("打开文件失败", err)
	}
	var fileStr string
	reader := bufio.NewReader(file)
	for {
		line, err := reader.ReadString('\n')
		if err == io.EOF {
		  fileStr += line
     	  break
		}
		if err != nil {
			return
		}
		fileStr += line
	}
	fmt.Println(fileStr)
}
```

read file easy

```sh
func main() {
	file, err := os.ReadFile("main.go")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(file))
}
```

write file

```sh
func main() {
	file, err := os.OpenFile("1.txt", os.O_CREATE|os.O_TRUNC|os.O_WRONLY, 0666)
	if err != nil {
		panic(err)
	}
	defer file.Close()
	for i := 0; i < 10; i++ {
		file.WriteString("Hello World " + strconv.Itoa(i) + "\n")
	}
}
```

bufio write

```sh
func main() {
	file, err := os.OpenFile("1.txt", os.O_CREATE|os.O_TRUNC|os.O_WRONLY, 0666)
	if err != nil {
		panic(err)
	}
	defer file.Close()
	writer := bufio.NewWriter(file)
	writer.WriteString("Hello World")
	writer.Flush()
}
```

write file easy

```sh
func main() {
	str := "Hello World"
	err := os.WriteFile("1.txt", []byte(str), 0666)
	if err != nil {
		panic(err)
	}
}
```

mkdir dir

```sh
func main() {
	os.Mkdir("test", 0777)
	os.MkdirAll("test/bb/cc/dd", 0777)
}
```

remove dir

```sh
func main() {
	os.Remove("1.txt")
	os.Remove("test/bb/cc/dd")
	os.RemoveAll("test")
}
```

rename

```sh
func main() {
	os.Rename("test", "test1")
}
```