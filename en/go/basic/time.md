# time


```sh
timeObj := time.Now()
fmt.Println(timeObj)
fmt.Println(timeObj.Year())
fmt.Println(timeObj.Month())
fmt.Println(timeObj.Day())
fmt.Println(timeObj.Hour())
fmt.Println(timeObj.Minute())
fmt.Println(timeObj.Second())
fmt.Printf("%02d-%02d-%02d %02d:%02d:%02d\n", timeObj.Year(), timeObj.Month(), timeObj.Day(), timeObj.Hour(), timeObj.Minute(), timeObj.Second())
fmt.Println(timeObj.Format("2006-01-02 15:04:05"))
```

current unix timestamp

```sh
timeObj := time.Now().Unix()
fmt.Println(timeObj)
fmt.Println(time.Now().UnixNano())
```

timestamp to datetime str

```sh
unix := 1756520546
timeObj := time.Unix(int64(unix), 0)
var str = timeObj.Format("2006-01-02 15:04:05")
fmt.Println(str)
```

str to timestamp

```sh
timeStr := "2025-08-30 10:22:26"
timeFormat := "2006-01-02 15:04:05"
unix, _ := time.ParseInLocation(timeFormat, timeStr, time.Local)
fmt.Println(unix.Unix())
```

add time

```sh
var timeObj = time.Now()
fmt.Println(timeObj.Format("2006-01-02 15:04:05"))
fmt.Println(timeObj.Add(time.Hour * 5).Format("2006-01-02 15:04:05"))
```

timer

```sh
func main() {
	ticker := time.NewTicker(time.Second)
	defer ticker.Stop()
	n := 5
	for t := range ticker.C {
		if n < 0 {
			ticker.Stop()
			break
		}
		n--
		fmt.Println(t.Format("2006-01-02 15:04:05"))
	}
	time.Sleep(time.Second * 2)
	fmt.Println("finish")
}
```