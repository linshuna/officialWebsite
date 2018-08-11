// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
//封装地图插件
import base from '@/utils/base.js'
Vue.use(base)


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

//描述和关键字
import { description } from '@/utils/api.js'
let keywordMeta = document.querySelector('meta[name="keywords"]');
let descriptionMeta = document.querySelector('meta[name="Description"]');
description().then(res=>{
  keywordMeta.content = res.keywords
  descriptionMeta.content = res.description
})

import filters from './utils/filters.js'
//全局定义过滤器
for (let key in filters) { 
  Vue.filter(key,filters[key])
}