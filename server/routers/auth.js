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
	let tip = await auth.addOneUser(ctx.request.body)
	if(tip){
		result.message = true
		result.data = "注册成功"
	}else{
		result.message = false
		result.data = "注册失败"
	}
	ctx.body = result
})
module.exports =  router;
