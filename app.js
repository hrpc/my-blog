//koa入口文件
const app = require('koa')()
	, koa = require('koa-router')()
	, json = require('koa-json')//美观的输出JSON response的Koa中间件
	, logger = require('koa-logger')//程序就会在控制台自动打印日志
	, bodyParser = require('koa-bodyparser')()//对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
