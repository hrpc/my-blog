const User = require("../models/user")
var that = this
exports.findUserByName = async function(name,callback){
	await User.find({username:name},function(err,obj){
		if(err){
			return handleError(err)
		}
		callback(err,obj)
	})
}
//创建新用户
exports.addOneUser = async function(resisterInfo,callback){
	await User.create(resisterInfo,function(err,newUser){
		if(err){
			return handleError(err)
		}
		//添加用户成功
		callback(err,'注册成功')
	})
}
