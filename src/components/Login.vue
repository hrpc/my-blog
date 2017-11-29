<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" placeholder="账号" v-model="username"/>
    <input type="password" placeholder="密码" v-model="password"/>
    <button>登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '欢迎登录',
      userName:null,
      password:null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
