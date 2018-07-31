// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import axios from './utils/axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(require('vue-wechat-title'))
import './assets/css/base.scss'
import './assets/css/animations.css'
import './assets/css/border-1px.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
