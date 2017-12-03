<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" placeholder="用户名" v-model="registerInfo.username"/>
    <input type="password" placeholder="密码" v-model="registerInfo.password"/>
    <button @click="register">注册</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '欢迎注册',
      registerInfo:{
      	username:null,
      	password:null,
      	createTime:null
      }
    }
  },
  methods:{
  	register(){
  		this.registerInfo.createTime = new Date().toLocaleDateString();
  		this.$http.post(this.$domain + '/auth/register',this.registerInfo).then(function(res){
  			console.log(res)
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
