# install

install

```sh
bun add --save-exact --save-dev esbuild
```

see version

```sh
./node_modules/.bin/esbuild --version
```

build bundle

```sh
bun add react react-dom
```

create `app.jsx`

```sh
import * as React from 'react'
import * as Server from 'react-dom/server'

let Greet = () => <h1>Hello, world!</h1>
console.log(Server.renderToString(<Greet />))
```

build file

```sh
./node_modules/.bin/esbuild app.jsx --bundle --outfile=out.js
```