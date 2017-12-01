//装载所有子路由
const Router = require('koa-router')
const auth = require('./auth.js')
const router = new Router();

//二级路由'/login/:name'
router.use('/auth',auth.routes(),auth.allowedMethods())

module.exports = router
