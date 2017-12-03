const auth = require('../controllers/user.js')
const Router = require('koa-router');

let router = new Router();

router.get('/login/:name',async (ctx) => {
	let result = {
		message:false,
		data:null
	}
	await auth.findUserByName(ctx.params.name,function(err,obj){
		if(err){
			return console.error(err)
		}
		result.message = true
		result.data = obj
	})
	ctx.body = result
})
router.post('/register',async (ctx) => {
	let result = {
		message:false,
		data:null
	}
	let addInfo
	//验证用户名是否重复
	await auth.findUserByName(ctx.request.body.username,function(err,obj){
		if(err){
			return console.error(err)
		}
		addInfo = obj
	})
	//用户不重复
	if(addInfo.length === 0){
		await auth.addOneUser(ctx.request.body,function(err,obj){
			if(err){
				return console.error(err)
			}
			result.message = true
			result.data = obj
		})
	}else{
		//用户名已存在
		result.message = false
		result.data = '用户名已存在'
	}
	ctx.body = result
})
module.exports =  router;
