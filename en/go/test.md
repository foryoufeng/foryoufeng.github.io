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