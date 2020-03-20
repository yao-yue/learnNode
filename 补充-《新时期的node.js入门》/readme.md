## 新时期的node.js入门
---------本书学于微信读书

express的缺陷，对于异步中间件的层级调用，处理不够完善，于是来了koa
koa2舍弃了Genertor函数和co模块，完全使用async函数来实现

## 博客系统项目内容规划
### 1.需求分析
1. 上传文章
博客系统采用本地编写文章，然后上传到网站上的方式实现，更关注路由和数据库存储仿麦呢的内容

2. 路由设计
/
/blogList                  获取全部的博客列表
/kind/:kindeName            某个分类下的博客列表
/kindList                   获取分类列表
/blog/:blogId                根据id获取博客内容
/modify/blog/:blogId/:kindName      修改一篇博客的分类
/modify/kind/:kindName              修改分类的名称
/new/kind/:kindName             新增分类
/delete/blog/:blogId            删除一篇博客
/delete/kind/:kindName          删除一个分类

2. 技术选型
解决问题： 静态文件服务 路由设计 数据存储 页面渲染
技术栈： Node+koa+MongoDB+Redis(存储session)+Ejs(页面模板引擎)


### 简单入门
context对象，node提供的request\response对象，koa把他们封装到了同一个对象中，简化操作
- 请求相关
ctx.header
ctx.headers
ctx.method
ctx.url
ctx.originalUrl
ctx.origin
ctx.href
ctx.path
ctx.query
ctx.querystring
ctx.host
ctx.hosthome
ctx.fresh
ctx.state
ctx.socket  ...
- 响应相关
ctx.body 
ctx.status
ctx.message ...
```
例如：  res.body = 'hello koa'

express:res.statusCode = 200
        res.end('hello koa')
```

// 大多都是把req，res的东西委托到ctx句柄上
但是ctx.response和ctx.request和原生对象request、response不同,没有原生对象的操作丰富，只能间接使用pipe

- ctx.state
官方推荐的命名空间，可以保存一些变量

### 中间件的概念
Express本身是由路由和中间件构成的，从本质来说Expresss的运行就是不断在调用各种中间件
本质上是接收请求并且做出相应的动作
eg:
```
async function md(ctx, next) {
    xxx
    await next()
}

var app = express()
app.use(md)        //使用中间件
```
中间件的种类 
- 应用级中间件
- 路由中间件
- 错误处理、内置中间件
- 第三方中间件


### 事件循环
- 什么是事件
- 什么在循环
事件： 在可交互的用户页面上，用户会产生一系列的事件，包括单击按钮、拖动元素等，这些事件会按照顺序被加载到一个队列中去，除了页面事件之外，还有一些Ajax执行完成，文件读取完毕、定时器到点等事件。如果事件绑定了回调方法，那么循环就会去调用这个方法      
循环： js的事件循环是依靠浏览器实现的，Node循环是由底层的libuv实现的.
node循环6阶段:
1. Timers： 用来处理定时器setTimeout() 和setInterval()
2. I/O callbacks：大多数的回调方法在这个阶段执行，除了那几个定时器+close之外的回调
3. idle prepare   系统内部使用，可以透明他
4. Poll            轮询，不断检查有没有新的I/O事件，事件循环可能在这里阻塞 
    > 1. 如果有到期的定时器，就执行定时器的回调方法
    > 2. 处理poll阶段对应的事件队列里的事件，按照顺序遍历执行队列里的回调函数，这个过程是同步的。
    - 如果poll队列为空，
    - 如果定义了setImmediate()，就到check阶段去
    - 如果没有setImmediate()，就进入等待状态，等待新的事件出现
5. check            处理setImmediate()事件的回调
6. close callbacks   处理一些close相关的事件