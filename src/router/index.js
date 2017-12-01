import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/components/Login.vue'], resolve)//懒加载
    },
    {
      path: '/loginSuccess',
      name: 'loginSuccess',
      component: resolve => require(['@/components/LoginSuccess.vue'], resolve)//懒加载
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/components/Register.vue'], resolve)//懒加载
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})
