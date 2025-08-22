# vite

## install

```sh
bun add -D vite @vitejs/plugin-vue
```

config vite in `vite.config.js`

```sh
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
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

