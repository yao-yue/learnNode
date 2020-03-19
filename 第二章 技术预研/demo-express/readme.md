## Express
要了解一个框架，最好的方法是
- 了解他的关键功能( Features)
- 推导出它要解决的问题是什么
更加简洁、更加方便的写出http服务，大大减轻开发负担

后台路由的概念
服务器会根据请求包的内容进行请求分发，分发到不同的逻辑单元去处理，这个分发的过程就较路由

http helpers。简化http操作
模块引擎 express 14+
脚手架 快速上手


### 核心功能
- 路由
- request\response 简化
    > request： pathname\query
    > response: send() json() jsonp()等


### express对于异步的处理不够完善，有一些设计缺陷
中间件异步会出问题，洋葱模型会打破

koa的await next()可以暂停执行 