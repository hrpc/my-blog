const User = require("../models/user")

exports.findUserByName = async function(name,callback){
	await User.find({name:name},function(err,obj){
		if(err){
			return handleError(err)
		}
		callback(err,obj)
	})
}
//创建新用户
exports.addOneUser = async function(resisterInfo,callback){
	let newUser = new User(resisterInfo);
	let addSucccess = false
	await newUser.save((err,doc) => {
		if(err){
			return console.error(err)
		}
		addSucccess = true
	})
	return addSucccess
}
