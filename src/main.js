// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {baseUrl,appid,authUrl,regOpen} from './config/env'

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.prototype.$domain = baseUrl;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
