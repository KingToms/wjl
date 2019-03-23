// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from '@/page/homepage/index'
import router from './router/index'
import axios from 'axios'
import 'lib-flexible'
import store from './store/store'

//引入mockjs
require("./mock.js")

Vue.prototype.$axios=axios
Vue.prototype.HOST='/api'

// axios.defaults.baseURL='http://api-mm.qiaocat.com'
// axios.defaults.headers.post['Content-type']='application/x-www-form-urlencoded'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
