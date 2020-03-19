## koa

### koa的特点
1. async await弥补了中间件和洋葱模型，异步
2. context,Request,Response       
ctx.request ctx.response
ctx.status ctx.body //简化了一些 
可以把一些变量放上去

function(res,req)  =>  function(ctx, next)

koa不会绑定任何的中间件，极简的思路.路由放中间件里去，koa不自带路由。

koa-mount //路由中间件

### koa核心功能
1. 比express更极致的request/response简化
- ctx.status = 200
- ctx.body = 'hello world'//响应体    

2. 使用async function 实现的中间件
- 具有“暂停执行”的能力
- 在异步的情况下也符合洋葱模型

3. 精简内核，所有额外功能都移到中间件里面实现

### Express vs Koa
- express门槛更低，koa更强大优雅
- express封装更多东西，开发更迅速，koa可定制更高，大型可维护的能力

