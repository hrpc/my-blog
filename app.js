//koa入口文件
const Koa = require('koa')
const json = require('koa-json')//美观的输出JSON response的Koa中间件
const logger = require('koa-logger')//程序就会在控制台自动打印日志
const bodyParser = require('koa-bodyparser')//对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
const router = require('./server/routers/main.js')
const app = new Koa()
const Router = require('koa-router')

app.use(bodyParser())
app.use(json())
app.use(logger())


//加载路由中间件
app.use(router.routes()).use(router.allowedMethods())//将路由挂载到koa上
app.listen(3000,() => {
	console.log('start at port 8889')
})

