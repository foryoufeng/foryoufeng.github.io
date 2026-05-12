# factory


```sh
package abstract_factory

import "strconv"

type Pay interface {
	Money(price int64) string
}

type AliPay struct {
}

func (a *AliPay) Money(price int64) string {
	return "alipay: " + strconv.FormatInt(price, 10)
}

type WechatPay struct {
}

func (a *WechatPay) Money(price int64) string {
	return "wechat pay: " + strconv.FormatInt(price, 10)
}

type PayFactory interface {
	CreatePay() Pay
}

type AliPayFactory struct{}

func (a *AliPayFactory) CreatePay() Pay {
	return &AliPay{}
}

type WechatPayFactory struct{}

func (w *WechatPayFactory) CreatePay() Pay {
	return &WechatPay{}
}

```

run `main.go`

```sh
package main

import (
	"demo/patterns/abstract_factory"
	"fmt"
)

func main() {
	factory := abstract_factory.AliPayFactory{}
	pay := factory.CreatePay()
	fmt.Println(pay.Money(100))

	factory2 := abstract_factory.WechatPayFactory{}
	pay = factory2.CreatePay()
	fmt.Println(pay.Money(200))
}

```