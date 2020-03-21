const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const secret = 'hbw-key'
const jsw = require('koa-jwt')({secret})
router.post('/api/login', async (ctx, next) => {
    const user = ctx.request.body
    if(user && user.username) {
        let {username} = user

    const token = sign({username}, secret, {expiresIn: '1h'})
    ctx.body = {
        message: 'Get token Success',
        code: 1,
        token
    }} else {
        ctx.body = {
            message: 'Param Error',
            code: -1
        }
    }

}).get('/api/userInfo', jwt, async ctx => {
    ctx.body = {
        username: ctx.state.user.username
    }
}).get('/api/adminInfo', jwt, async ctx => {
    ctx.body = {
        username: ctx.state.user.username
    }
})
// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>index Page<h1>'
//     await next()
// } )
// .get('/user:id',async (ctx, next) => {
//     ctx.body = '获取用户编号为id的用户信息'
// })
// .post('/users', async (ctx, next) => {
//     ctx.body = '新增用户编号为id的用户信息'
// })
// .del('/user:id', async (ctx, next) => {
//     ctx.body = '删除了用户编号为id的用户信息'
// })
// .put('/user:id', async (ctx, next) => {
//     ctx.body = '修改了用户编号为id的用户信息'
// })
// all()方法一般用来设置请求头，如设置过期时间
// CORS（Cross-OriginResource Sharing，跨域资源共享）等
// router.all('/', async (ctx, next) => {
//     console.log('match all method')
//     ctx.set('Access-Control-Allow-Origin', 'http://loacalhost:8080')
//     await next()
// })



app.use(router.routes())
app.listen(3000, () => {
    console.log('server is running at 3000')
})