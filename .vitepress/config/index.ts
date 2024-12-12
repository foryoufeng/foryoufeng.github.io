import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'

export default defineConfig({
  ignoreDeadLinks: true,
  ...shared,
  locales: {
    root: { label: 'English', ...en },
  }
})
