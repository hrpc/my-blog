var User = require('../models/user')

const getUserInfo = async function(name){
	User.getUserByName(name)
}
