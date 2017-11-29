import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/components/Login'
import LoginSuccess from '@/components/LoginSuccess.vue'

export default new Router({
  mode:"history",
  base: __dirname, 
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/loginSuccess',
      name: 'loginSuccess',
      component: LoginSuccess
    },
    {
      path: '*',
      redirect: '/' // 输入其他不存在的地址自动跳回首页
    }
  ]
})
