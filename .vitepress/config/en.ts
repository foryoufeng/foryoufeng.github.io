import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'foryoufeng blog',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/laravel_basic/': { base: '/laravel_basic/', items: laravelBasic() },
      '/php/': { base: '/php/', items: php() },
      // '/vue/': { base: '/reference/', items: sidebarReference() },
      // '/java/': { base: '/reference/', items: sidebarReference() },
      '/vscode/': { base: '/vscode/', items: vscode() },
      '/linux/': { base: '/linux/', items: linux() }
    },

    // editLink: {
    //   pattern: 'https://github.com/foryoufeng/edit/main/:path',
    //   text: 'Edit this page on GitHub'
    // },

    footer: {
      copyright: 'Copyright © 2019-present foryoufeng'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'php',
      link: '/php',
      activeMatch: '/php/'
    },
    {
      text: 'laravel',
      link: '/zh/laravel/index',
      // activeMatch: '/laravel/'
    },
    {
      text: 'linux',
      link: '/linux',
      activeMatch: '/linux/'
    },
  ]
}

function laravelBasic(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'install',
      collapsed: false,
      items: [
        { text: 'install', link: 'install/install' },
      ]
    }
  ]
}

function vscode(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Document',
      // collapsed: false,
      items: [
        { text: 'What is vscode?', link: 'what-is-vitepress' },
      ]
    },
  ]
}

function linux(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Document',
      // collapsed: false,
      items: [
        { text: 'network', link: 'network' },
      ]
    },
  ]
}

function php(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Document',
      // collapsed: false,
      items: [
        { text: 'functions', link: 'functions/framework' },
      ]
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is VitePress?', link: 'what-is-vitepress' },
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Routing', link: 'routing' },
        { text: 'Deploy', link: 'deploy' }
      ]
    },
    {
      text: 'Writing',
      collapsed: false,
      items: [
        { text: 'Markdown Extensions', link: 'markdown' },
        { text: 'Asset Handling', link: 'asset-handling' },
        { text: 'Frontmatter', link: 'frontmatter' },
        { text: 'Using Vue in Markdown', link: 'using-vue' },
        { text: 'Internationalization', link: 'i18n' }
      ]
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: 'custom-theme' },
        {
          text: 'Extending the Default Theme',
          link: 'extending-default-theme'
        },
        { text: 'Build-Time Data Loading', link: 'data-loading' },
        { text: 'SSR Compatibility', link: 'ssr-compat' },
        { text: 'Connecting to a CMS', link: 'cms' }
      ]
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: [
        { text: 'MPA Mode', link: 'mpa-mode' },
        { text: 'Sitemap Generation', link: 'sitemap-generation' }
      ]
    },
    { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: 'site-config' },
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        // {
        //   text: 'Default Theme',
        //   base: '/reference/default-theme-',
        //   items: [
        //     { text: 'Overview', link: 'config' },
        //     { text: 'Nav', link: 'nav' },
        //     { text: 'Sidebar', link: 'sidebar' },
        //     { text: 'Home Page', link: 'home-page' },
        //     { text: 'Footer', link: 'footer' },
        //     { text: 'Layout', link: 'layout' },
        //     { text: 'Badge', link: 'badge' },
        //     { text: 'Team Page', link: 'team-page' },
        //     { text: 'Prev / Next Links', link: 'prev-next-links' },
        //     { text: 'Edit Link', link: 'edit-link' },
        //     { text: 'Last Updated Timestamp', link: 'last-updated' },
        //     { text: 'Search', link: 'search' },
        //     { text: 'Carbon Ads', link: 'carbon-ads' }
        //   ]
        // }
      ]
    }
  ]
}
