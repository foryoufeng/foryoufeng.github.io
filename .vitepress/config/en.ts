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
      '/laravel/': { base: '/laravel/', items: laravel() },
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
      copyright: 'Copyright © 2019-2025 foryoufeng'
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
      link: '/laravel/index',
      // activeMatch: '/laravel/'
    },
    {
      text: 'linux',
      link: '/linux',
      activeMatch: '/linux/'
    },
    {
      text: 'english',
      link: '/english/words',
      activeMatch: '/english/'
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
