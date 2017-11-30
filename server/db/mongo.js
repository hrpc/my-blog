const config = require('../config/default');
const mongoose = require('mongoose');//引用mongoose模块
mongoose.connect(config.mongodb);//连接数据库
var db = mongoose.connection;

db.on('error',console.log.bind(console,'connection error:'));
db.once('open',function(){
	console.log('连接正常')
})
/**
 * 新建一个数据库userSchema框架
 */
var userSchema = mongoose.Schema({
	name:String,
	pass:String,
	role:String,
	createTime:Date,
	lastLogin:Date
})
userSchema.methods.getUserByName = function(name){
	
}
userSchema.methods.checkLogin = function(name,password){
	
}

module.exports = {
	mongoose,
	userSchema
}
