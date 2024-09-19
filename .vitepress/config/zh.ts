import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '由 Vite 和 Vue 驱动的静态站点生成器',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/php/': { base: '/zh/php/', items: php() },
      '/zh/laravel/': { base: '/zh/laravel/', items: laravel() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2020-${new Date().getFullYear()} foryoufeng`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
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
      text: 'linux',
      link: '/linux',
      activeMatch: '/linux/'
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
function laravel(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'laravel源码分析',
      link: './',
    },
    {
      text: 'Composer',
      items: [
        { text: 'Composer自动加载原理', link: 'composer/load' },
        { text: 'Composer初始化源码分析', link: 'composer/init' },
      ]
    },
    {
      text: 'facade',
      items: [
        { text: 'facade', link: 'facade/facade' },
      ]
    },
    {
      text: '容器',
      items: [
        { text: '服务容器', link: 'ioc/service_container' },
        { text: '容器绑定', link: 'ioc/ioc_source_bind' },
        { text: '容器解析', link: 'ioc/ioc_source_parse' },
        { text: '容器细节特性', link: 'ioc/ioc_source_detail' },
      ]
    },
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
