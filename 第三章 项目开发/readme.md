## 技术分析

css失效， static中间件

npm i -g nodemon 自动重启 

课程详情页需求结构
- 使用RPC通信从后台服务器获取数据
- 模板渲染,模板引擎
    > include 子模版
    > xss过滤， 模板helper函数ul,ol

ES6模板字符串--当成模板引擎来用，是所有模板引擎里面性能最高的
搭配vm模块

通过vm模块编译js形成函数
 > include 子模版
 > xss过滤， 模板helper函数ul,ol


easy_sock跟后台RPC通信的模块 


API服务 - RESTful
一个资源就是一个路径，然后不同请求方式就是不同操作
- 简单易懂
- 可以快速搭建
- 在数据的聚合方面有很大略势，针对多个资源的请求，会产生浪费

API服务 - GraphQL
- 专注数据聚合，前端要什么就返回什么
- Facebook开发的实现API服务的库，让前端有自定义查询数据的能力

2个对比，一个是餐厅点菜，一个是食堂打菜.餐厅点菜一道菜要加盐加辣都可以，但是你要一道菜里面拼别的菜就要再点一份自己拼。食堂打菜就是喜欢的自己打，方便快捷


发送请求测试的chrome工具 Restlet Client 

koa-graphQL包 

query 查询
mutation  写操作 


### 列表页需求解构
- 后端需要渲染列表
首屏加速     
SEO
- 前端也需要渲染列表
无刷新过滤，排序
- 前后端同构，同一个模板，可以在浏览器渲染，也可以在Node.js渲染


### 前后端同构
同一份数据能够渲染出一样的页面
ReactDomServer.renderToString()
VueServerRender.renderToString()
同构的最大难题是数据部分 next.js
同构的关键
- 注重职责的分离，是处理数据，还是处理环境
browser
components  //同构代码
node

@babel/register @babel/preset-react @babel/core 
能够require('react')






