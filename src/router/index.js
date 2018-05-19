import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sign from '@/components/page/gsign'
import gHome from '@/components/common/gHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/home',
      name: 'gHome',
      component: gHome
    }
  ]
})
