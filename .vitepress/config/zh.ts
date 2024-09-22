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

    footer: {
      copyright: `版权所有 © 2020-${new Date().getFullYear()} foryoufeng`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '导航'
    },

    // lastUpdated: {
    //   text: '最后更新于',
    //   formatOptions: {
    //     dateStyle: 'short',
    //     timeStyle: 'medium'
    //   }
    // },

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
      text: 'laravel',
      link: '/laravel',
      activeMatch: '/laravel/'
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
      text: 'function',
      // collapsed: false,
      items: [
        { text: 'functions', link: 'functions/framework' },
      ]
    },
    {
      text: '类加载',
      items: [
        { text: '类自动加载机制', link: 'autoload/autoload' },
        { text: 'autoload机制的实现解析', link: 'autoload/autoload-analysis' },
      ]
    },
  ]
}
function laravel(): DefaultTheme.SidebarItem[] {
  return [
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
        { text: '门面', link: 'facade/facade' },
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
    {
      text: '路由',
      items: [
        { text: '路由', link: 'router/route' },
        { text: '路由分析', link: 'router/route-analysis' },
        { text: 'Pipeline中间件', link: 'router/route-pipeline' },
        { text: '路由的正则编译', link: 'router/route-regex' },
        { text: '路由的匹配与参数绑定', link: 'router/route-match' },
        { text: '路由中间件源码分析', link: 'router/route-middleware-analysis' },
        { text: '参数绑定中间件的使用与解析', link: 'router/route-bind-analysis' },
        { text: '控制器方法的参数构建与运行', link: 'router/route-controller' },
        { text: 'RESTFul 风格路由', link: 'router/route-restful' },
        { text: '重定向的使用与源码分析', link: 'router/route-redirect' },
      ]
    },
    {
      text: '环境变量',
      items: [
        { text: '环境变量', link: 'env/env-analysis' },
      ]
    },
    {
      text: '配置文件',
      items: [
        { text: '配置文件的加载与源码解析', link: 'config/config-analysis' },
      ]
    },
    {
      text: '异常处理',
      items: [
        { text: '异常与错误处理', link: 'exception/exception-deal' },
      ]
    },
    {
      text: '服务提供者',
      items: [
        { text: '服务提供者的注册与启动', link: 'provider/provider-analysis' },
      ]
    },
    {
      text: '数据库',
      items: [
        { text: '数据库服务的启动与连接', link: 'database/connect' },
        { text: '数据库的 CRUD 操作', link: 'database/curd' },
        { text: '查询构造器与语法编译器(上)', link: 'database/build-one' },
        { text: '查询构造器与语法编译器(中)', link: 'database/build-two' },
        { text: '查询构造器与语法编译器(下)', link: 'database/build-three' },
        { text: '分页原理与源码分析', link: 'database/page' },
        { text: 'Eloquent Model 源码分析(上)', link: 'database/model-one' },
        { text: 'Eloquent Model 源码分析(下)', link: 'database/model-two' },
        { text: 'Eloquent Model 关联源码分析', link: 'database/model-join' },
        { text: 'Eloquent Model 模型关系', link: 'database/model-query' },
        { text: 'Eloquent Model 更新关联模型', link: 'database/model-update' },
      ]
    },
    {
      text: 'Session',
      items: [
        { text: 'session 的启动与运行', link: 'session/session-analysis' },
      ]
    },
    {
      text: '事件系统',
      items: [
        { text: '事件系统的启动与运行', link: 'event/event-analysis' },
      ]
    },
    {
      text: '队列',
      items: [
        { text: '消息队列任务与分发源码剖析', link: 'queue/queue-analysis' },
        { text: '消息队列任务处理器源码剖析', link: 'queue/queue-deal' },
      ]
    },
    {
      text: '广播系统',
      items: [
        { text: '广播系统源码剖析', link: 'broadcast/broadcast-analysis' },
      ]
    },
    {
      text: 'Passport',
      items: [
        { text: 'OAuth2 API 认证系统解析', link: 'passport/passport-one' },
        { text: 'OAuth2 API 认证系统解析(下)', link: 'passport/passport-two' },
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
