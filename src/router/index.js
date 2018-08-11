import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import NewActivityPage from '@/pages/NewActivityPage'
import NewActivityPageDetail from '@/pages/NewActivityPageDetail'
import ServerStore from '@/pages/ServerStore'
import ServerStoreDetail from '@/pages/ServerStoreDetail'
import Appointments from '@/pages/Appointments'
import AppointSuccess from '@/pages/AppointSuccess'
//AppointSuccess

import DetailsMaintenance from '@/pages/DetailsMaintenance'
import Aspiration from '@/pages/Aspiration'
import Maintenance from '@/pages/Maintenance'
import Weare from '@/pages/Weare'
import Search from '@/pages/Search'
import NewsDetail from '@/pages/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        actived: true,
        activeIndex:'1'
      }
    },
    {
      path: '/NewActivityPage',
      name: 'NewActivityPage',
      component: NewActivityPage,
      meta: {
        title: '最新活动',
        activeIndex:'7'
      }
    },
    {
      path: '/NewActivityPageDetail/:id',
      name: 'NewActivityPageDetail',
      component: NewActivityPageDetail,
      meta: {
        title: '活动详情',
        activeIndex:'7'
      }
    },
    {
      path: '/ServerStore/:code',
      name: 'ServerStore',
      component: ServerStore,
      meta: {
        title: '服务门店',
        activeIndex:'3'
      }
    },
    {
      path: '/ServerStore/ServerStoreDetail/:shopId',
      name: 'ServerStoreDetail',
      component: ServerStoreDetail,
      meta: {
        title: '门店详情',
        activeIndex:'3'
      }
    },
    {
      path: '/ServerStore/ServerStoreDetail/Appointments/:shopId',
      name: 'Appointments',
      component: Appointments,
      meta: {
          title: '预约',
          activeIndex:'3'
      }
    },
    {
      path: '/ServerStore/ServerStoreDetail/AppointSuccess/:orderNo',
      name: 'AppointSuccess',
      component: AppointSuccess,
      meta: {
          title: '预约成功',
          activeIndex:'3'
      }
    },
    {
      path: '/DetailsMaintenance',
      name: 'DetailsMaintenance',
      component: DetailsMaintenance,
      meta: {
        title: '保养资讯',
        activeIndex:'4-1'
      }
    },
    {
      path: '/DetailsMaintenance/Aspiration',
      name: 'Aspiration',
      component: Aspiration,
      meta: {
        title: '车主心声',
        activeIndex:'4-2'
      }
    },

    {
      path: '/Maintenance/:carnatid',
      name: 'Maintenance',
      component: Maintenance,
      meta: {
        title: '自助保养',
        activeIndex:'5'
      }
    },
    //Weare
    {
      path: '/Weare',
      name: 'Weare',
      component: Weare,
      meta: {
        title: '关于我们',
        activeIndex:'6'
      }
    },
    {
      path: '/Search/:con',
      name: 'Search',
      component: Search,
      meta: {
        title: '搜素'
      }
    },
    {
      path: '/NewsDetail/:id/:activeIndex',
      name: 'NewsDetail',
      component: NewsDetail,
      meta: {
        title: '详情'
      }
    },
  ]
})

