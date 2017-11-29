//koa入口文件
const Koa = require('koa')
const router = require('koa-router')()
const json = require('koa-json')//美观的输出JSON response的Koa中间件
const logger = require('koa-logger')//程序就会在控制台自动打印日志
const bodyParser = require('koa-bodyparser')()//对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
var app = new Koa();

app.use(bodyParser);
app.use(json());
app.use(logger());

app.use(async (ctx, next) => {
	let start = new Date();
	await next();
	let ms = new Date - start;//启动时间
	console.log('%s %s - %s:',ctx.method,ctx.url,ms)
});

app.on('error', function(err, ctx){
  console.log('server error', err);
});

app.listen(8889,(err) => {
	if(err){
		console.log(err);
		return;
	}
	console.log("koa is listen port 8889");
});

module.exports = app;
