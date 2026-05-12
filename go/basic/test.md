# test

install
```sh
go get github.com/stretchr/testify/assert
```

use

```sh
import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetUserAgent(t *testing.T) {
	assert := assert.New(t)
	userAgent := "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0"
	system, browser := GetUserAgent(userAgent)
	assert.Equal("Linux/x86_64", system)
	assert.Equal("Edge/138.0.0.0", browser)
}

```

basic

```sh
package model

import "testing"

func TestAdd(t *testing.T) {
	res := Add(1, 2)
	if res != 3 {
		t.Error("add fail")
		return
	}
	t.Log(res)
}

```

children test

```sh
package model

import "testing"

func TestAdd(t *testing.T) {
	t.Run("Add", func(t *testing.T) {
		res := Add(1, 2)
		if res != 3 {
			t.Error("add fail")
			return
		}
		t.Log(res)
	})
	t.Run("Add2", func(t *testing.T) {
		res := Add(-1, 2)
		if res != 1 {
			t.Error("add fail")
			return
		}
		t.Log(res)
	})

}

```