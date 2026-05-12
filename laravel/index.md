# laravel源码分析

* PHP版本 v8.3.6
* composer版本 v2.7.8
* laravel版本 v11.9.2

## 目录
### PHP Composer 自动加载
* [PHP Composer自动加载原理](./composer/load)
* [PHP Composer初始化源码分析](./composer/init)
* [PHP Composer注册与运行源码分析](./composer/run)
### Laravel Facade 门面
* [Laravel Facade——Facade 门面源码分析](./facade/facade)
### Laravel Ioc 容器
* [Laravel Container——IoC 服务容器](./ioc/service_container)
* [Laravel Container——IoC 服务容器绑定](./ioc/ioc_source_bind)
* [Laravel Container——IoC 服务容器解析](./ioc/ioc_source_parse)
* [Laravel Container——服务容器的细节特性](./ioc/ioc_source_detail)
### Laravel Route 路由
* [Laravel HTTP——路由](./router/route)
* [Laravel HTTP——路由加载源码分析](./router/route-analysis)
* [Laravel HTTP——Pipeline中间件处理源码分析](./router/route-pipeline)
* [Laravel HTTP——路由的正则编译](./router/route-regex)
* [Laravel HTTP——路由的匹配与参数绑定](./router/route-match)
* [Laravel HTTP——路由中间件源码分析](./router/route-middleware-analysis)
* [Laravel HTTP——SubstituteBindings 参数绑定中间件的使用与源码解析](./router/route-bind-analysis)
* [Laravel HTTP——控制器方法的参数构建与运行](./router/route-controller)
* [Laravel HTTP—— RESTFul 风格路由的使用与源码分析](./router/route-restful)
* [Laravel HTTP——重定向的使用与源码分析](./router/route-redirect)
### Laravel ENV 环境变量
* [Laravel ENV—— 环境变量的加载与源码解析](./env/env-analysis)
### Laravel Config 配置文件
* [Laravel Config—— 配置文件的加载与源码解析](./config/config-analysis)
### Laravel Exceptions 异常处理
* [Laravel Exceptions——异常与错误处理](./exception/exception-deal)
### Laravel Providers 服务提供者
* [Laravel Providers——服务提供者的注册与启动源码解析](./provider/provider-analysis)
### Laravel Database 数据库
* [Laravel Database——数据库服务的启动与连接](./database/connect)
* [Laravel Database——数据库的 CRUD 操作](./database/curd)
* [Laravel Database——查询构造器与语法编译器源码分析\(上\)](./database/build-one)
* [Laravel Database——查询构造器与语法编译器源码分析\(中\)](./database/build-two)
* [Laravel Database——查询构造器与语法编译器源码分析\(下\)](./database/build-three)
* [Laravel Database——分页原理与源码分析](./database/page)
* [Laravel Database——Eloquent Model 源码分析\(上\)](./database/model-one)
* [Laravel Database——Eloquent Model 源码分析（下）](./database/model-two)
* [Laravel Database——Eloquent Model 关联源码分析](./database/model-join)
* [Laravel Database——Eloquent Model 模型关系加载与查询](./database/model-query)
* [Laravel Database——Eloquent Model 更新关联模型](./database/model-update)
### Laravel Session
* [Laravel Session——session 的启动与运行源码分析](./session/session-analysis)
### Laravel Event 事件系统
* [Laravel Event——事件系统的启动与运行源码分析](./event/event-analysis)
### Laravel Queue 队列
* [Laravel Queue——消息队列任务与分发源码剖析](./queue/queue-analysis)
* [Laravel Queue——消息队列任务处理器源码剖析](./queue/queue-deal)
### Laravel 广播系统
* [Laravel Broadcast——广播系统源码剖析](./broadcast/broadcast-analysis)
### Laravel Passport
* [Laravel Passport——OAuth2 API 认证系统源码解析](./passport/passport-one)
* [Laravel Passport——OAuth2 API 认证系统源码解析\(下\)](./passport/passport-two)

