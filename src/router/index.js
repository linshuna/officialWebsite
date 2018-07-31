import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import NewActivityPage from '@/pages/NewActivityPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/NewActivityPage',
      name: 'NewActivityPage',
      component: NewActivityPage,
      meta: {
        title: '最新活动'
      }
    }
  ]
})
