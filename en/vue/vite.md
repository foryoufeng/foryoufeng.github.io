# vite

## install

```sh
bun add -D vite @vitejs/plugin-vue vue vue-tsc
```

config vite in `vite.config.js`

```sh
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vuePlugin()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

```

saas

```sh
bun add -D saas
```

