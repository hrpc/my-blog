<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  	<input type="text" placeholder="账号" v-model="username"/>
    <input type="password" placeholder="密码" v-model="password"/>
    <button @click="login">登录</button>
    <button @click="register">注册</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:null,
      password:null
    }
  },
  methods:{
  	login(){
  		this.$router.push('loginSuccess')
  	},
  	register(){
  		this.$router.push('register')
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
