import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

export const shared = defineConfig({
  title: 'Foryoufeng',

  rewrites: {
    'en/:rest*': ':rest*'
  },

  // lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://foryoufeng.github.io',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://avatars.githubusercontent.com/u/6702914' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://avatars.githubusercontent.com/u/6702914' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
    ['meta', { property: 'og:site_name', content: 'VitePress' }],
    ['meta', { property: 'og:image', content: 'https://avatars.githubusercontent.com/u/6702914' }],
    ['meta', { property: 'og:url', content: 'https://foryoufeng.github.io' }],
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: { src: 'https://avatars.githubusercontent.com/u/6702914', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/foryoufeng/foryoufeng.github.io' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '6K3T5SAGGI',
        apiKey: '2674927737ff850f160290f0d12f74c9',
        indexName: 'document',
        locales: {
          ...zhSearch,
        }
      }
    }
  }
})
