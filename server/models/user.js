const mongoose = require('mongoose');//引用mongoose模块
const Schema = mongoose.Schema;
const userSchema = new Schema({
	name:String,
	pass:String,
	role:String,
	createTime:Date,
	lastLogin:Date
}) 
userSchema.methods.getUserByName = async function(name){
	return await this.find({name:name}).exec().catch(function(err){
		console.log(err)
	})
}
/**
 * 发布框架生成userModel模型,model第一个参数为model名称
 */
const userModel = mongoose.model('user',userSchema);

module.exports = {
	userModel
}
