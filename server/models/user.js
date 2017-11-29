import mongoose from 'mongoose';
//在 Mongoose 中，所有东西都从一个 Schema 开始。每一个 schema 都映射到一个 MongoDb 的集合，并定义了该集合中的文档的形式。
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  avatar: String,
  createTime: String
}, { versionKey: false });
module.exports = mongoose.model('user', userSchema);