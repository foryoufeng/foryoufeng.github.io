# goroutine

start goroutine

```sh
var wg sync.WaitGroup

func run() {
	for i := 0; i < 10; i++ {
		fmt.Println("run", i)
		time.Sleep(100 * time.Millisecond)
	}
	wg.Done()
}
func main() {
	wg.Add(1)
	go run()
	for i := 0; i < 10; i++ {
		fmt.Println("main", i)
		time.Sleep(20 * time.Millisecond)
	}
	wg.Wait()
	fmt.Println("main end")
}
```

do shop 

```sh
package main

import (
	"fmt"
	"sync"
	"time"
)

func shop(name string) {
	time.Sleep(1 * time.Second)
	fmt.Println("shop", name)
	defer wg.Done()
}

var wg sync.WaitGroup

func main() {

	startTime := time.Now()
	wg.Add(5)
	go shop("shop")
	go shop("shop2")
	go shop("shop3")
	go shop("shop4")
	go shop("shop5")
	wg.Wait()

	endTime := time.Since(startTime)
	fmt.Println(endTime)
}
```

open channel

```sh
var wg sync.WaitGroup

func run(v int) {
	defer wg.Done()
	for i := 0; i < 10; i++ {
		fmt.Println(v, " run ", i)
	}
}
func main() {
	for i := 0; i < 5; i++ {
		wg.Add(1)
		go run(i)
	}
	wg.Wait()
	fmt.Println("main end")
}
```

do shop

```sh
package main

import (
	"fmt"
	"sync"
	"time"
)

var shopChan = make(chan int)

func shop(name string, money int) {
	time.Sleep(1 * time.Second)
	fmt.Println("shop", name)
	shopChan <- money
	defer wg.Done()
}

var wg sync.WaitGroup

func main() {

	startTime := time.Now()
	wg.Add(5)
	go shop("shop", 2)
	go shop("shop2", 3)
	go shop("shop3", 4)
	go shop("shop4", 5)
	go shop("shop5", 6)
	go func() {
		wg.Wait()
		close(shopChan)
	}()
	for money := range shopChan {
		fmt.Println("money =", money)
	}

	endTime := time.Since(startTime)
	fmt.Println(endTime)
}

```

print 

```sh
var wg sync.WaitGroup

func run(v int) {
	defer wg.Done()
	for num := (v-1)*30000 + 1; num < 30000*v; num++ {
		flag := true
		for i := 2; i < num; i++ {
			if num%i == 0 {
				flag = false
				break
			}
		}
		if flag {
			//fmt.Println("num is ", num)
		}
	}
}
func main() {
	start := time.Now().Unix()
	for i := 0; i <= 4; i++ {
		wg.Add(1)
		go run(i)
	}
	wg.Wait()
	fmt.Println("main end")
	end := time.Now().Unix()
	fmt.Println(end - start)
}
```

channel

```sh
func main() {
	ch := make(chan int, 3)
	ch <- 10
	a := <-ch
	fmt.Println(a)
}
```

for range channel,need to `close`

```sh
func main() {
	ch := make(chan int, 3)
	for i := 0; i < 3; i++ {
		ch <- i + 1
	}
	close(ch)
	for v := range ch {
		fmt.Println(v)
	}

}
```

for channel

```sh
func main() {
	ch := make(chan int, 3)
	for i := 0; i < 3; i++ {
		ch <- i + 1
	}
	for i := 0; i < 3; i++ {
		fmt.Println(<-ch)
	}
}
```

write and read channel

```sh

var wg sync.WaitGroup

func write(ch chan int) {
	defer wg.Done()
	for i := 0; i < 10; i++ {
		ch <- i
		fmt.Println("write", i)
	}
	close(ch)
}
func read(ch chan int) {
	defer wg.Done()
	for v := range ch {
		fmt.Println("read-->", v)
	}
}
func main() {
	ch := make(chan int, 3)
	wg.Add(1)
	go write(ch)
	wg.Add(1)
	go read(ch)
	wg.Wait()
}
```

select channel

```sh
func main() {
	ch := make(chan int, 10)
	for i := 0; i < 10; i++ {
		ch <- i
	}
	ch2 := make(chan int, 10)
	for i := 0; i < 10; i++ {
		ch2 <- i
	}
	for {
		select {
		case v := <-ch2:
			fmt.Println(v)
		case v := <-ch:
			fmt.Println(v)
		default:
			fmt.Println("over")
			return
		}
	}

}
```

recover

```sh
func write() {
	ch := make(chan int, 10)
	for i := 0; i < 10; i++ {
		ch <- i
	}
	for i := 0; i < 10; i++ {
		fmt.Println(<-ch)
	}
}
func write2() {
	defer func() {
		err := recover()
		if err != nil {
			fmt.Println(err)
		}
	}()
	a := 10
	b := 0
	c := a / b
	fmt.Println(c)
}

func main() {
	go write2()
	go write()
	time.Sleep(1 * time.Second)
}

```

lock

```sh

var wg sync.WaitGroup
var count int = 0
var mutex = &sync.Mutex{}

func run() {
	defer wg.Done()
	mutex.Lock()
	count++
	fmt.Println(count)
	time.Sleep(100 * time.Millisecond)
	mutex.Unlock()
}

func main() {
	for i := 0; i < 20; i++ {
		wg.Add(1)
		go run()
	}
	wg.Wait()
}
```