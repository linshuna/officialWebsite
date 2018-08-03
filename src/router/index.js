import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import NewActivityPage from '@/pages/NewActivityPage'
import ServerStore from '@/pages/ServerStore'
import ServerStoreDetail from '@/pages/ServerStoreDetail'
import DetailsMaintenance from '@/pages/DetailsMaintenance'
import Aspiration from '@/pages/Aspiration'
import Maintenance from '@/pages/Maintenance'

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
    },
    {
      path: '/ServerStore',
      name: 'ServerStore',
      component: ServerStore,
      meta: {
        title: '服务门店'
      }
    },
    {
      path: '/ServerStore/ServerStoreDetail',
      name: 'ServerStoreDetail',
      component: ServerStoreDetail,
      meta: {
        title: '门店详情'
      }
    },
    {
      path: '/DetailsMaintenance',
      name: 'DetailsMaintenance',
      component: DetailsMaintenance,
      meta: {
        title: '保养资讯'
      }
    },
    {
      path: '/DetailsMaintenance/Aspiration',
      name: 'Aspiration',
      component: Aspiration,
      meta: {
        title: '车主心声'
      }
    },

    {
      path: '/Maintenance',
      name: 'Maintenance',
      component: Maintenance,
      meta: {
        title: '自助保养'
      }
    },
  ]
})

